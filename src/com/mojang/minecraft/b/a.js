
package com.mojang.minecraft.b;

import java.util.Iterator;
import com.mojang.minecraft.net.NetworkPlayer;
import org.lwjgl.input.Keyboard;
import com.mojang.minecraft.b;
import com.mojang.minecraft.a.c;
import org.lwjgl.opengl.GL11;
import java.util.ArrayList;
import com.mojang.minecraft.d;
import java.util.List;

public final class a
{
    public List a;
    private d b;
    private int c;
    private int d;
    
    public a(final d b, final int n, final int n2) {
        this.a = new ArrayList();
        this.b = b;
        this.c = n * 240 / n2;
        this.d = n2 * 240 / n2;
    }
    
    public final void a() {
        final l j = this.b.j;
        this.b.c();
        final com.mojang.minecraft.a.a i = this.b.i;
        GL11.glBindTexture(3553, this.b.i.a("/gui.png"));
        GL11.glEnable(3553);
        final c a = com.mojang.minecraft.a.c.a;
        GL11.glColor4f(1.0f, 1.0f, 1.0f, 1.0f);
        GL11.glEnable(3042);
        final com.mojang.minecraft.player.c inventory = this.b.d.inventory;
        a(this.c / 2 - 91, this.d - 22, 0, 0, 182, 22);
        a(this.c / 2 - 91 - 1 + inventory.b * 20, this.d - 22 - 1, 0, 22, 24, 22);
        GL11.glDisable(3042);
        for (int k = 0; k < inventory.a.length; ++k) {
            final int n;
            if ((n = inventory.a[k]) > 0) {
                GL11.glPushMatrix();
                GL11.glTranslatef((float)(this.c / 2 - 90 + k * 20), (float)(this.d - 16), -50.0f);
                GL11.glScalef(10.0f, 10.0f, 10.0f);
                GL11.glTranslatef(1.0f, 0.5f, 0.0f);
                GL11.glRotatef(-30.0f, 1.0f, 0.0f, 0.0f);
                GL11.glRotatef(45.0f, 0.0f, 1.0f, 0.0f);
                GL11.glTranslatef(-1.5f, 0.5f, 0.5f);
                GL11.glScalef(-1.0f, -1.0f, -1.0f);
                GL11.glBindTexture(3553, i.a("/terrain.png"));
                GL11.glEnable(3553);
                a.b();
                com.mojang.minecraft.level.a.a.a[n].a(a, this.b.c, 0, -2, 0, 0);
                a.a();
                GL11.glDisable(3553);
                GL11.glPopMatrix();
            }
        }
        j.a("0.0.21a", 2, 2, 16777215);
        j.a(this.b.s, 2, 12, 16777215);
        int n2 = 10;
        boolean b = false;
        if (this.b.k instanceof com.mojang.minecraft.b.c) {
            n2 = 20;
            b = true;
        }
        for (int n3 = 0; n3 < this.a.size() && n3 < n2; ++n3) {
            if (((b)this.a.get(n3)).b < 200 || b) {
                j.a(((b)this.a.get(n3)).a, 2, this.d - 8 - (n3 << 3) - 16, 16777215);
            }
        }
        final int n4 = this.c / 2;
        final int n5 = this.d / 2;
        GL11.glColor4f(1.0f, 1.0f, 1.0f, 1.0f);
        a.b();
        a.b((float)(n4 + 1), (float)(n5 - 4), 0.0f);
        a.b((float)n4, (float)(n5 - 4), 0.0f);
        a.b((float)n4, (float)(n5 + 5), 0.0f);
        a.b((float)(n4 + 1), (float)(n5 + 5), 0.0f);
        a.b((float)(n4 + 5), (float)n5, 0.0f);
        a.b((float)(n4 - 4), (float)n5, 0.0f);
        a.b((float)(n4 - 4), (float)(n5 + 1), 0.0f);
        a.b((float)(n4 + 5), (float)(n5 + 1), 0.0f);
        a.a();
        if (Keyboard.isKeyDown(15) && this.b.o != null && this.b.o.a()) {
            final com.mojang.minecraft.net.d o = this.b.o;
            final ArrayList<String> list;
            (list = new ArrayList<String>()).add(o.c.e.b);
            final Iterator<NetworkPlayer> iterator = o.f.values().iterator();
            while (iterator.hasNext()) {
                list.add(iterator.next().name);
            }
            final ArrayList<String> list2 = list;
            GL11.glEnable(3042);
            GL11.glBlendFunc(770, 771);
            GL11.glBegin(7);
            GL11.glColor4f(0.0f, 0.0f, 0.0f, 0.7f);
            GL11.glVertex2f((float)(n4 + 128), (float)(n5 - 68 - 12));
            GL11.glVertex2f((float)(n4 - 128), (float)(n5 - 68 - 12));
            GL11.glColor4f(0.2f, 0.2f, 0.2f, 0.8f);
            GL11.glVertex2f((float)(n4 - 128), (float)(n5 + 68));
            GL11.glVertex2f((float)(n4 + 128), (float)(n5 + 68));
            GL11.glEnd();
            GL11.glDisable(3042);
            final String s = "Connected players:";
            j.a(s, n4 - j.a(s) / 2, n5 - 64 - 12, 16777215);
            for (int l = 0; l < list2.size(); ++l) {
                j.b((String)list2.get(l), n4 + l % 2 * 120 - 120, n5 - 64 + (l / 2 << 3), 16777215);
            }
        }
    }
    
    private static void a(final int n, final int n2, final int n3, final int n4, final int n5, final int n6) {
        final float n7 = 0.00390625f;
        final float n8 = 0.015625f;
        final c a;
        (a = c.a).b();
        a.a((float)n, (float)(n2 + 22), -90.0f, 0.0f, (n4 + 22) * n8);
        a.a((float)(n + n5), (float)(n2 + 22), -90.0f, (n5 + 0) * n7, (n4 + 22) * n8);
        a.a((float)(n + n5), (float)n2, -90.0f, (n5 + 0) * n7, n4 * n8);
        a.a((float)n, (float)n2, -90.0f, 0.0f, n4 * n8);
        a.a();
    }
}
