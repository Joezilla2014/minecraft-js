
package com.mojang.minecraft.b;

import org.lwjgl.opengl.GL11;
import com.mojang.minecraft.a.c;
import com.mojang.minecraft.a;

public final class d extends f
{
    public d() {
        this.e = true;
    }
    
    private int b(final int n, final int n2) {
        for (int i = 0; i < com.mojang.minecraft.a.a.size(); ++i) {
            final int n3 = this.b / 2 + i % 8 * 24 - 96 - 3;
            final int n4 = this.c / 2 + i / 8 * 24 - 48 + 3;
            if (n >= n3 && n <= n3 + 24 && n2 >= n4 - 12 && n2 <= n4 + 12) {
                return i;
            }
        }
        return -1;
    }
    
    @Override
    public final void a(int b, int i) {
        b = this.b(b, i);
        f.a(this.b / 2 - 120, 30, this.b / 2 + 120, 180, -1878719232, -1070583712);
        if (b >= 0) {
            i = this.b / 2 + b % 8 * 24 - 96;
            final int n = this.c / 2 + b / 8 * 24 - 48;
            f.a(i - 3, n - 8, i + 23, n + 24 - 6, -1862270977, -1056964609);
        }
        this.a("Select block", this.b / 2, 40, 16777215);
        final com.mojang.minecraft.a.a j = this.a.i;
        final c a = com.mojang.minecraft.a.c.a;
        i = j.a("/terrain.png");
        GL11.glBindTexture(3553, i);
        GL11.glEnable(3553);
        com.mojang.minecraft.level.a.a a2;
        for (i = 0; i < com.mojang.minecraft.a.a.size(); ++i) {
            a2 = com.mojang.minecraft.a.a.get(i);
            GL11.glPushMatrix();
            GL11.glTranslatef((float)(this.b / 2 + i % 8 * 24 - 96), (float)(this.c / 2 + i / 8 * 24 - 48), 0.0f);
            GL11.glScalef(10.0f, 10.0f, 10.0f);
            GL11.glTranslatef(1.0f, 0.5f, 8.0f);
            GL11.glRotatef(-30.0f, 1.0f, 0.0f, 0.0f);
            GL11.glRotatef(45.0f, 0.0f, 1.0f, 0.0f);
            if (b == i) {
                GL11.glScalef(1.6f, 1.6f, 1.6f);
            }
            GL11.glTranslatef(-1.5f, 0.5f, 0.5f);
            GL11.glScalef(-1.0f, -1.0f, -1.0f);
            a.b();
            a2.a(a, this.a.c, 0, -2, 0, 0);
            a.a();
            GL11.glPopMatrix();
        }
        GL11.glDisable(3553);
    }
    
    @Override
    protected final void a(final int n, int b, final int n2) {
        if (n2 == 0) {
            final com.mojang.minecraft.player.c inventory = this.a.d.inventory;
            b = this.b(n, b);
            final com.mojang.minecraft.player.c c = inventory;
            if (b >= 0) {
                c.a(com.mojang.minecraft.a.a.get(b));
            }
            this.a.a((f)null);
        }
    }
}
