
package com.mojang.minecraft.b;

import org.lwjgl.input.Keyboard;
import org.lwjgl.input.Mouse;
import org.lwjgl.opengl.GL11;
import com.mojang.minecraft.a.c;
import java.util.ArrayList;
import java.util.List;
import com.mojang.minecraft.d;

public class f
{
    protected d a;
    protected int b;
    protected int c;
    protected List d;
    public boolean e;
    
    public f() {
        this.d = new ArrayList();
        this.e = false;
    }
    
    public void a(final int n, final int n2) {
        for (int i = 0; i < this.d.size(); ++i) {
            final g g;
            if ((g = this.d.get(i)).h) {
                if (!g.g) {
                    a(g.a - 1, g.b - 1, g.a + g.c + 1, g.b + g.d + 1, -8355680);
                    a(g.a, g.b, g.a + g.c, g.b + g.d, -7303024);
                    this.a(g.e, g.a + g.c / 2, g.b + (g.d - 8) / 2, -6250336);
                }
                else {
                    a(g.a - 1, g.b - 1, g.a + g.c + 1, g.b + g.d + 1, -16777216);
                    if (n >= g.a && n2 >= g.b && n < g.a + g.c && n2 < g.b + g.d) {
                        a(g.a - 1, g.b - 1, g.a + g.c + 1, g.b + g.d + 1, -6250336);
                        a(g.a, g.b, g.a + g.c, g.b + g.d, -8355680);
                        this.a(g.e, g.a + g.c / 2, g.b + (g.d - 8) / 2, 16777120);
                    }
                    else {
                        a(g.a, g.b, g.a + g.c, g.b + g.d, -9408400);
                        this.a(g.e, g.a + g.c / 2, g.b + (g.d - 8) / 2, 14737632);
                    }
                }
            }
        }
    }
    
    protected void a(final char c, final int n) {
        if (n == 1) {
            this.a.a((f)null);
            this.a.b();
        }
    }
    
    protected void a(final int n, final int n2, int i) {
        if (i == 0) {
            g g;
            for (i = 0; i < this.d.size(); ++i) {
                if ((g = this.d.get(i)).g && n >= g.a && n2 >= g.b && n < g.a + g.c && n2 < g.b + g.d) {
                    this.a(g);
                }
            }
        }
    }
    
    protected void a(final g g) {
    }
    
    public final void a(final d a, final int b, final int c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.a();
    }
    
    public void a() {
    }
    
    protected static void a(final int n, final int n2, final int n3, final int n4, final int n5) {
        final float n6 = (n5 >>> 24) / 255.0f;
        final float n7 = (n5 >> 16 & 0xFF) / 255.0f;
        final float n8 = (n5 >> 8 & 0xFF) / 255.0f;
        final float n9 = (n5 & 0xFF) / 255.0f;
        final c a = c.a;
        GL11.glEnable(3042);
        GL11.glBlendFunc(770, 771);
        GL11.glColor4f(n7, n8, n9, n6);
        a.b();
        a.b((float)n, (float)n4, 0.0f);
        a.b((float)n3, (float)n4, 0.0f);
        a.b((float)n3, (float)n2, 0.0f);
        a.b((float)n, (float)n2, 0.0f);
        a.a();
        GL11.glDisable(3042);
    }
    
    protected static void a(final int n, final int n2, final int n3, final int n4, final int n5, final int n6) {
        final float n7 = (n5 >>> 24) / 255.0f;
        final float n8 = (n5 >> 16 & 0xFF) / 255.0f;
        final float n9 = (n5 >> 8 & 0xFF) / 255.0f;
        final float n10 = (n5 & 0xFF) / 255.0f;
        final float n11 = (n6 >>> 24) / 255.0f;
        final float n12 = (n6 >> 16 & 0xFF) / 255.0f;
        final float n13 = (n6 >> 8 & 0xFF) / 255.0f;
        final float n14 = (n6 & 0xFF) / 255.0f;
        GL11.glEnable(3042);
        GL11.glBlendFunc(770, 771);
        GL11.glBegin(7);
        GL11.glColor4f(n8, n9, n10, n7);
        GL11.glVertex2f((float)n3, (float)n2);
        GL11.glVertex2f((float)n, (float)n2);
        GL11.glColor4f(n12, n13, n14, n11);
        GL11.glVertex2f((float)n, (float)n4);
        GL11.glVertex2f((float)n3, (float)n4);
        GL11.glEnd();
        GL11.glDisable(3042);
    }
    
    public final void a(final String s, final int n, final int n2, final int n3) {
        final l j = this.a.j;
        j.a(s, n - j.a(s) / 2, n2, n3);
    }
    
    public final void b(final String s, final int n, final int n2, final int n3) {
        this.a.j.a(s, n, n2, n3);
    }
    
    public final void d() {
        if (Mouse.getEventButtonState()) {
            this.a(Mouse.getEventX() * this.b / this.a.a, this.c - Mouse.getEventY() * this.c / this.a.b - 1, Mouse.getEventButton());
        }
    }
    
    public final void e() {
        if (Keyboard.getEventKeyState()) {
            this.a(Keyboard.getEventCharacter(), Keyboard.getEventKey());
        }
    }
    
    public void c() {
    }
    
    public void b() {
    }
}
