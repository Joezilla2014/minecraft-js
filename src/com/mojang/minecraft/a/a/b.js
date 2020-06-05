// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.a.a;

import com.mojang.minecraft.level.a.a;

public final class b extends c
{
    private float[] c;
    private float[] d;
    private float[] e;
    private float[] f;
    private int g;
    
    public b() {
        super(com.mojang.minecraft.level.a.a.j.R);
        this.c = new float[256];
        this.d = new float[256];
        this.e = new float[256];
        this.f = new float[256];
        this.g = 0;
    }
    
    @Override
    public final void a() {
        ++this.g;
        for (int i = 0; i < 16; ++i) {
            for (int j = 0; j < 16; ++j) {
                float n = 0.0f;
                for (int k = i - 1; k <= i + 1; ++k) {
                    n += this.c[(k & 0xF) + ((j & 0xF) << 4)];
                }
                this.d[i + (j << 4)] = n / 3.3f + this.e[i + (j << 4)] * 0.8f;
            }
        }
        for (int l = 0; l < 16; ++l) {
            for (int n2 = 0; n2 < 16; ++n2) {
                final float[] e = this.e;
                final int n3 = l + (n2 << 4);
                e[n3] += this.f[l + (n2 << 4)] * 0.05f;
                if (this.e[l + (n2 << 4)] < 0.0f) {
                    this.e[l + (n2 << 4)] = 0.0f;
                }
                final float[] f = this.f;
                final int n4 = l + (n2 << 4);
                f[n4] -= 0.1f;
                if (Math.random() < 0.05) {
                    this.f[l + (n2 << 4)] = 0.5f;
                }
            }
        }
        final float[] d = this.d;
        this.d = this.c;
        this.c = d;
        for (int n5 = 0; n5 < 256; ++n5) {
            float n6;
            if ((n6 = this.c[n5]) > 1.0f) {
                n6 = 1.0f;
            }
            if (n6 < 0.0f) {
                n6 = 0.0f;
            }
            final float n7 = n6 * n6;
            this.a[n5 << 2] = (byte)(32.0f + n7 * 32.0f);
            this.a[(n5 << 2) + 1] = (byte)(50.0f + n7 * 64.0f);
            this.a[(n5 << 2) + 2] = -1;
            this.a[(n5 << 2) + 3] = (byte)(146.0f + n7 * 50.0f);
        }
    }
}
