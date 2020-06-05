
package com.mojang.minecraft.level.b.a;

import java.util.Random;

public final class d extends c
{
    private int[] a;
    
    public d() {
        this(new Random());
    }
    
    public d(final Random random) {
        this.a = new int[512];
        for (int i = 0; i < 256; ++i) {
            this.a[i] = i;
        }
        for (int j = 0; j < 256; ++j) {
            final int n = random.nextInt(256 - j) + j;
            final int n2 = this.a[j];
            this.a[j] = this.a[n];
            this.a[n] = n2;
            this.a[j + 256] = this.a[j];
        }
    }
    
    private static double a(final double n) {
        return n * n * n * (n * (n * 6.0 - 15.0) + 10.0);
    }
    
    private static double a(final double n, final double n2, final double n3) {
        return n2 + n * (n3 - n2);
    }
    
    private static double a(int n, final double n2, final double n3, final double n4) {
        final double n5 = ((n &= 0xF) < 8) ? n2 : n3;
        final double n6 = (n < 4) ? n3 : ((n == 12 || n == 14) ? n2 : n4);
        return (((n & 0x1) == 0x0) ? n5 : (-n5)) + (((n & 0x2) == 0x0) ? n6 : (-n6));
    }
    
    @Override
    public final double a(final double n, final double n2) {
        this = this;
        final int n3 = (int)Math.floor(n) & 0xFF;
        final int n4 = (int)Math.floor(n2) & 0xFF;
        final int n5 = (int)Math.floor(0.0) & 0xFF;
        final double n6 = n - Math.floor(n);
        final double n7 = n2 - Math.floor(n2);
        final double n8 = 0.0 - Math.floor(0.0);
        final double a = a(n6);
        final double a2 = a(n7);
        final double a3 = a(n8);
        final int n9 = this.a[n3] + n4;
        final int n10 = this.a[n9] + n5;
        final int n11 = this.a[n9 + 1] + n5;
        final int n12 = this.a[n3 + 1] + n4;
        final int n13 = this.a[n12] + n5;
        final int n14 = this.a[n12 + 1] + n5;
        return a(a3, a(a2, a(a, a(this.a[n10], n6, n7, n8), a(this.a[n13], n6 - 1.0, n7, n8)), a(a, a(this.a[n11], n6, n7 - 1.0, n8), a(this.a[n14], n6 - 1.0, n7 - 1.0, n8))), a(a2, a(a, a(this.a[n10 + 1], n6, n7, n8 - 1.0), a(this.a[n13 + 1], n6 - 1.0, n7, n8 - 1.0)), a(a, a(this.a[n11 + 1], n6, n7 - 1.0, n8 - 1.0), a(this.a[n14 + 1], n6 - 1.0, n7 - 1.0, n8 - 1.0))));
    }
}
