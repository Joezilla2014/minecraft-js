// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.character;

import org.lwjgl.opengl.GL11;

public final class d
{
    private e[] d;
    private b[] e;
    private int f;
    private int g;
    private float h;
    private float i;
    private float j;
    public float a;
    public float b;
    public float c;
    private boolean k;
    private int l;
    
    public d(final int f, final int g) {
        this.k = false;
        this.l = 0;
        this.f = f;
        this.g = g;
    }
    
    public final void a(final float n, final float n2, final float n3, final int n4, final int n5, final int n6) {
        this.d = new e[8];
        this.e = new b[6];
        final float n7 = n + n4;
        final float n8 = n2 + n5;
        final float n9 = n3 + n6;
        final e e = new e(n, n2, n3, 0.0f, 0.0f);
        final e e2 = new e(n7, n2, n3, 0.0f, 8.0f);
        final e e3 = new e(n7, n8, n3, 8.0f, 8.0f);
        final e e4 = new e(n, n8, n3, 8.0f, 0.0f);
        final e e5 = new e(n, n2, n9, 0.0f, 0.0f);
        final e e6 = new e(n7, n2, n9, 0.0f, 8.0f);
        final e e7 = new e(n7, n8, n9, 8.0f, 8.0f);
        final e e8 = new e(n, n8, n9, 8.0f, 0.0f);
        this.d[0] = e;
        this.d[1] = e2;
        this.d[2] = e3;
        this.d[3] = e4;
        this.d[4] = e5;
        this.d[5] = e6;
        this.d[6] = e7;
        this.d[7] = e8;
        this.e[0] = new b(new e[] { e6, e2, e3, e7 }, this.f + n6 + n4, this.g + n6, this.f + n6 + n4 + n6, this.g + n6 + n5);
        this.e[1] = new b(new e[] { e, e5, e8, e4 }, this.f, this.g + n6, this.f + n6, this.g + n6 + n5);
        this.e[2] = new b(new e[] { e6, e5, e, e2 }, this.f + n6, this.g, this.f + n6 + n4, this.g + n6);
        this.e[3] = new b(new e[] { e3, e4, e8, e7 }, this.f + n6 + n4, this.g, this.f + n6 + n4 + n4, this.g + n6);
        this.e[4] = new b(new e[] { e2, e, e4, e3 }, this.f + n6, this.g + n6, this.f + n6 + n4, this.g + n6 + n5);
        this.e[5] = new b(new e[] { e5, e6, e7, e8 }, this.f + n6 + n4 + n6, this.g + n6, this.f + n6 + n4 + n6 + n4, this.g + n6 + n5);
    }
    
    public final void a(final float h, final float i, final float n) {
        this.h = h;
        this.i = i;
        this.j = 0.0f;
    }
    
    public final void a(final float n) {
        if (!this.k) {
            GL11.glNewList(this.l = GL11.glGenLists(1), 4864);
            GL11.glBegin(7);
            for (int i = 0; i < this.e.length; ++i) {
                final b b;
                final c a = (b = this.e[i]).a[1].a.a(b.a[0].a).a();
                final c a2 = b.a[1].a.a(b.a[2].a).a();
                final c c = a;
                final c c2 = a2;
                final c c3 = c;
                final c a3;
                GL11.glNormal3f((a3 = new c(c3.b * c2.c - c3.c * c2.b, c3.c * c2.a - c3.a * c2.c, c3.a * c2.b - c3.b * c2.a).a()).a, a3.b, a3.c);
                for (int j = 0; j < 4; ++j) {
                    final e e;
                    GL11.glTexCoord2f((e = b.a[j]).b / 64.0f, e.c / 32.0f);
                    GL11.glVertex3f(e.a.a * n, e.a.b * n, e.a.c * n);
                }
            }
            GL11.glEnd();
            GL11.glEndList();
            this.k = true;
        }
        final float n2 = 57.29578f;
        GL11.glPushMatrix();
        GL11.glTranslatef(this.h * n, this.i * n, this.j * n);
        GL11.glRotatef(this.c * n2, 0.0f, 0.0f, 1.0f);
        GL11.glRotatef(this.b * n2, 0.0f, 1.0f, 0.0f);
        GL11.glRotatef(this.a * n2, 1.0f, 0.0f, 0.0f);
        GL11.glCallList(this.l);
        GL11.glPopMatrix();
    }
}
