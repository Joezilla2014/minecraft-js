
package com.mojang.minecraft.a.a;

public final class a extends c
{
    private float[] c;
    private float[] d;
    private float[] e;
    private float[] f;
    
    public a() {
        super(com.mojang.minecraft.level.a.a.l.R);
        this.c = new float[256];
        this.d = new float[256];
        this.e = new float[256];
        this.f = new float[256];
    }
    
    @Override
    public final void a() {
        for (int i = 0; i < 16; ++i) {
            for (int j = 0; j < 16; ++j) {
                float n = 0.0f;
                final int n2 = (int)(Math.sin(j * 3.141592653589793 * 2.0 / 16.0) * 1.2000000476837158);
                final int n3 = (int)(Math.sin(i * 3.141592653589793 * 2.0 / 16.0) * 1.2000000476837158);
                for (int k = i - 1; k <= i + 1; ++k) {
                    for (int l = j - 1; l <= j + 1; ++l) {
                        n += this.c[(k + n2 & 0xF) + ((l + n3 & 0xF) << 4)];
                    }
                }
                this.d[i + (j << 4)] = n / 10.0f + (this.e[(i & 0xF) + ((j & 0xF) << 4)] + this.e[(i + 1 & 0xF) + ((j & 0xF) << 4)] + this.e[(i + 1 & 0xF) + ((j + 1 & 0xF) << 4)] + this.e[(i & 0xF) + ((j + 1 & 0xF) << 4)]) / 4.0f * 0.8f;
                final float[] e = this.e;
                final int n4 = i + (j << 4);
                e[n4] += this.f[i + (j << 4)] * 0.01f;
                if (this.e[i + (j << 4)] < 0.0f) {
                    this.e[i + (j << 4)] = 0.0f;
                }
                final float[] f = this.f;
                final int n5 = i + (j << 4);
                f[n5] -= 0.06f;
                if (Math.random() < 0.005) {
                    this.f[i + (j << 4)] = 1.5f;
                }
            }
        }
        final float[] d = this.d;
        this.d = this.c;
        this.c = d;
        for (int n6 = 0; n6 < 256; ++n6) {
            float n7;
            if ((n7 = this.c[n6]) > 1.0f) {
                n7 = 1.0f;
            }
            if (n7 < 0.0f) {
                n7 = 0.0f;
            }
            final float n9;
            final int n8 = (int)((n9 = n7) * 200.0f + 55.0f);
            final int n10 = (int)(n9 * n9 * 255.0f);
            final int n11 = (int)(n9 * n9 * n9 * n9 * 128.0f);
            this.a[n6 << 2] = (byte)n8;
            this.a[(n6 << 2) + 1] = (byte)n10;
            this.a[(n6 << 2) + 2] = (byte)n11;
            this.a[(n6 << 2) + 3] = -1;
        }
    }
}
