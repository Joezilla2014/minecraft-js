
package com.mojang.minecraft.level.b.a;

import java.util.Random;

public final class a extends c
{
    private d[] a;
    private int b;
    
    public a(final Random random, int i) {
        this.b = 8;
        this.a = new d[8];
        for (i = 0; i < 8; ++i) {
            this.a[i] = new d(random);
        }
    }
    
    @Override
    public final double a(final double n, final double n2) {
        double n3 = 0.0;
        double n4 = 1.0;
        for (int i = 0; i < this.b; ++i) {
            n3 += this.a[i].a(n / n4, n2 / n4) * n4;
            n4 *= 2.0;
        }
        return n3;
    }
}
