// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.a;

import org.lwjgl.opengl.GL11;
import org.lwjgl.BufferUtils;
import java.nio.FloatBuffer;

public final class c
{
    private FloatBuffer b;
    private float[] c;
    private int d;
    private float e;
    private float f;
    private float g;
    private float h;
    private float i;
    private boolean j;
    private boolean k;
    private int l;
    private int m;
    private boolean n;
    public static c a;
    
    private c() {
        this.b = BufferUtils.createFloatBuffer(524288);
        this.c = new float[524288];
        this.d = 0;
        this.j = false;
        this.k = false;
        this.l = 3;
        this.m = 0;
        this.n = false;
    }
    
    public final void a() {
        if (this.d > 0) {
            this.b.clear();
            this.b.put(this.c, 0, this.m);
            this.b.flip();
            if (this.k && this.j) {
                GL11.glInterleavedArrays(10794, 0, this.b);
            }
            else if (this.k) {
                GL11.glInterleavedArrays(10791, 0, this.b);
            }
            else if (this.j) {
                GL11.glInterleavedArrays(10788, 0, this.b);
            }
            else {
                GL11.glInterleavedArrays(10785, 0, this.b);
            }
            GL11.glEnableClientState(32884);
            if (this.k) {
                GL11.glEnableClientState(32888);
            }
            if (this.j) {
                GL11.glEnableClientState(32886);
            }
            GL11.glDrawArrays(7, 0, this.d);
            GL11.glDisableClientState(32884);
            if (this.k) {
                GL11.glDisableClientState(32888);
            }
            if (this.j) {
                GL11.glDisableClientState(32886);
            }
        }
        this.d();
    }
    
    private void d() {
        this.d = 0;
        this.b.clear();
        this.m = 0;
    }
    
    public final void b() {
        this.d();
        this.j = false;
        this.k = false;
        this.n = false;
    }
    
    public final void a(final float g, final float h, final float i) {
        if (this.n) {
            return;
        }
        if (!this.j) {
            this.l += 3;
        }
        this.j = true;
        this.g = g;
        this.h = h;
        this.i = i;
    }
    
    public final void a(int n, int n2, int n3) {
        final c c = this;
        final int n4 = (byte)n;
        final int n5 = (byte)n2;
        n3 = (byte)n3;
        n2 = n5;
        n = n4;
        this = c;
        if (!c.n) {
            if (!this.j) {
                final c c2 = this;
                c2.l += 3;
            }
            this.j = true;
            this.g = (n & 0xFF) / 255.0f;
            this.h = (n2 & 0xFF) / 255.0f;
            this.i = (n3 & 0xFF) / 255.0f;
        }
    }
    
    public final void a(final float n, final float n2, final float n3, final float n4, float e) {
        final float f = e;
        e = n4;
        if (!this.k) {
            this.l += 2;
        }
        this.k = true;
        this.e = e;
        this.f = f;
        this.b(n, n2, n3);
    }
    
    public final void b(final float n, final float n2, final float n3) {
        if (this.k) {
            this.c[this.m++] = this.e;
            this.c[this.m++] = this.f;
        }
        if (this.j) {
            this.c[this.m++] = this.g;
            this.c[this.m++] = this.h;
            this.c[this.m++] = this.i;
        }
        this.c[this.m++] = n;
        this.c[this.m++] = n2;
        this.c[this.m++] = n3;
        ++this.d;
        if (this.d % 4 == 0 && this.m >= 524288 - (this.l << 2)) {
            this.a();
        }
    }
    
    public final void a(int n) {
        final int n2 = n >> 16 & 0xFF;
        final int n3 = n >> 8 & 0xFF;
        n &= 0xFF;
        this.a(n2, n3, n);
    }
    
    public final void c() {
        this.n = true;
    }
    
    static {
        c.a = new c();
    }
}
