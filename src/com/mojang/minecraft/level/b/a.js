
package com.mojang.minecraft.level.b;

import java.util.ArrayList;
import com.mojang.minecraft.level.b.a.c;
import com.mojang.minecraft.level.b.a.b;
import com.mojang.minecraft.level.Level;
import java.util.Random;
import com.mojang.minecraft.d;

public final class a
{
    private d a;
    private int b;
    private int c;
    private int d;
    private Random e;
    private byte[] f;
    private int[] g;
    
    public a(final d a) {
        this.e = new Random();
        this.g = new int[1048576];
        this.a = a;
    }
    
    public final Level a(final String creator, final int b, final int c, final int n) {
        this.a.a("Generating level");
        this.b = b;
        this.c = c;
        this.d = 64;
        this.f = new byte[b * c << 6];
        this.a.b("Raising..");
        final b b2 = new b(new com.mojang.minecraft.level.b.a.a(this.e, 8), new com.mojang.minecraft.level.b.a.a(this.e, 8));
        final b b3 = new b(new com.mojang.minecraft.level.b.a.a(this.e, 8), new com.mojang.minecraft.level.b.a.a(this.e, 8));
        final com.mojang.minecraft.level.b.a.a a = new com.mojang.minecraft.level.b.a.a(this.e, 8);
        final int[] array = new int[this.b * this.c];
        final float n2 = 1.3f;
        for (int i = 0; i < this.b; ++i) {
            this.a(i * 100 / (this.b - 1));
            for (int j = 0; j < this.c; ++j) {
                final double a2 = b2.a(i * n2, j * n2) / 8.0 - 8.0;
                double b4 = b3.a(i * n2, j * n2) / 6.0 + 6.0;
                if (a.a(i, j) / 8.0 > 0.0) {
                    b4 = a2;
                }
                double n3;
                if ((n3 = Math.max(a2, b4) / 2.0) < 0.0) {
                    n3 *= 0.8;
                }
                array[i + j * this.b] = (int)n3;
            }
        }
        final int[] array2 = array;
        this.a.b("Eroding..");
        final int[] array3 = array2;
        final b b5 = new b(new com.mojang.minecraft.level.b.a.a(this.e, 8), new com.mojang.minecraft.level.b.a.a(this.e, 8));
        final b b6 = new b(new com.mojang.minecraft.level.b.a.a(this.e, 8), new com.mojang.minecraft.level.b.a.a(this.e, 8));
        for (int k = 0; k < this.b; ++k) {
            this.a(k * 100 / (this.b - 1));
            for (int l = 0; l < this.c; ++l) {
                final double n4 = b5.a(k << 1, l << 1) / 8.0;
                final int n5 = (b6.a(k << 1, l << 1) > 0.0) ? 1 : 0;
                if (n4 > 2.0) {
                    array3[k + l * this.b] = ((array3[k + l * this.b] - n5) / 2 << 1) + n5;
                }
            }
        }
        this.a.b("Soiling..");
        final int[] array4 = array2;
        final int b7 = this.b;
        final int c2 = this.c;
        final int d = this.d;
        final com.mojang.minecraft.level.b.a.a a3 = new com.mojang.minecraft.level.b.a.a(this.e, 8);
        for (int n6 = 0; n6 < b7; ++n6) {
            this.a(n6 * 100 / (this.b - 1));
            for (int n7 = 0; n7 < c2; ++n7) {
                final int a4;
                final int b8 = (a4 = array4[n6 + n7 * b7] + d / 2) + ((int)(a3.a(n6, n7) / 24.0) - 4);
                array4[n6 + n7 * b7] = Math.max(a4, b8);
                for (int n8 = 0; n8 < d; ++n8) {
                    final int n9 = (n8 * this.c + n7) * this.b + n6;
                    int n10 = 0;
                    if (n8 <= a4) {
                        n10 = com.mojang.minecraft.level.a.a.e.S;
                    }
                    if (n8 <= b8) {
                        n10 = com.mojang.minecraft.level.a.a.c.S;
                    }
                    this.f[n9] = (byte)n10;
                }
            }
        }
        this.a.b("Carving..");
        final int b9 = this.b;
        final int c3 = this.c;
        final int d2 = this.d;
        for (int n11 = b9 * c3 * d2 / 256 / 64, n12 = 0; n12 < n11; ++n12) {
            this.a(n12 * 100 / (n11 - 1) / 4);
            float n13 = this.e.nextFloat() * b9;
            float n14 = this.e.nextFloat() * d2;
            float n15 = this.e.nextFloat() * c3;
            final int n16 = (int)((this.e.nextFloat() + this.e.nextFloat()) * 75.0f);
            float n17 = (float)(this.e.nextFloat() * 3.141592653589793 * 2.0);
            float n18 = 0.0f;
            float n19 = (float)(this.e.nextFloat() * 3.141592653589793 * 2.0);
            float n20 = 0.0f;
            for (int n21 = 0; n21 < n16; ++n21) {
                n13 += (float)(Math.sin(n17) * Math.cos(n19));
                n15 += (float)(Math.cos(n17) * Math.cos(n19));
                n14 += (float)Math.sin(n19);
                n17 += n18 * 0.2f;
                n18 = n18 * 0.9f + (this.e.nextFloat() - this.e.nextFloat());
                n19 = (n19 + n20 * 0.5f) * 0.5f;
                n20 = n20 * 0.9f + (this.e.nextFloat() - this.e.nextFloat());
                if (this.e.nextFloat() >= 0.3f) {
                    final float n22 = n13 + this.e.nextFloat() * 4.0f - 2.0f;
                    final float n23 = n14 + this.e.nextFloat() * 4.0f - 2.0f;
                    final float n24 = n15 + this.e.nextFloat() * 4.0f - 2.0f;
                    final float n25 = (float)(Math.sin(n21 * 3.141592653589793 / n16) * 2.5 + 1.0);
                    for (int n26 = (int)(n22 - n25); n26 <= (int)(n22 + n25); ++n26) {
                        for (int n27 = (int)(n23 - n25); n27 <= (int)(n23 + n25); ++n27) {
                            for (int n28 = (int)(n24 - n25); n28 <= (int)(n24 + n25); ++n28) {
                                final float n29 = n26 - n22;
                                final float n30 = n27 - n23;
                                final float n31 = n28 - n24;
                                if (n29 * n29 + n30 * n30 * 2.0f + n31 * n31 < n25 * n25 && n26 >= 1 && n27 >= 1 && n28 >= 1 && n26 < this.b - 1 && n27 < this.d - 1 && n28 < this.c - 1) {
                                    final int n32 = (n27 * this.c + n28) * this.b + n26;
                                    if (this.f[n32] == com.mojang.minecraft.level.a.a.c.S) {
                                        this.f[n32] = 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        this.a(com.mojang.minecraft.level.a.a.r.S, 90, 1, 4);
        this.a(com.mojang.minecraft.level.a.a.q.S, 70, 2, 4);
        this.a(com.mojang.minecraft.level.a.a.p.S, 50, 3, 4);
        this.a.b("Watering..");
        final long nanoTime = System.nanoTime();
        long lng = 0L;
        final int s = com.mojang.minecraft.level.a.a.k.S;
        this.a(0);
        for (int n33 = 0; n33 < this.b; ++n33) {
            lng = lng + this.a(n33, this.d / 2 - 1, 0, 0, s) + this.a(n33, this.d / 2 - 1, this.c - 1, 0, s);
        }
        for (int n34 = 0; n34 < this.c; ++n34) {
            lng = lng + this.a(0, this.d / 2 - 1, n34, 0, s) + this.a(this.b - 1, this.d / 2 - 1, n34, 0, s);
        }
        for (int n35 = this.b * this.c / 200, n36 = 0; n36 < n35; ++n36) {
            if (n36 % 100 == 0) {
                this.a(n36 * 100 / (n35 - 1));
            }
            final int nextInt = this.e.nextInt(this.b);
            final int n37 = this.d / 2 - 1 - this.e.nextInt(3);
            final int nextInt2 = this.e.nextInt(this.c);
            if (this.f[(n37 * this.c + nextInt2) * this.b + nextInt] == 0) {
                lng += this.a(nextInt, n37, nextInt2, 0, s);
            }
        }
        this.a(100);
        System.out.println("Flood filled " + lng + " tiles in " + (System.nanoTime() - nanoTime) / 1000000.0 + " ms");
        this.a.b("Melting..");
        this.a();
        this.a.b("Growing..");
        this.a(array2);
        this.a.b("Planting..");
        this.b(array2);
        final Level level;
        (level = new Level()).setData(b, 64, c, this.f);
        level.createTime = System.currentTimeMillis();
        level.creator = creator;
        level.name = "A Nice World";
        return level;
    }
    
    private void a(final int[] array) {
        final int b = this.b;
        final int c = this.c;
        final int d = this.d;
        final com.mojang.minecraft.level.b.a.a a = new com.mojang.minecraft.level.b.a.a(this.e, 8);
        final com.mojang.minecraft.level.b.a.a a2 = new com.mojang.minecraft.level.b.a.a(this.e, 8);
        for (int i = 0; i < b; ++i) {
            this.a(i * 100 / (this.b - 1));
            for (int j = 0; j < c; ++j) {
                final boolean b2 = a.a(i, j) > 8.0;
                final boolean b3 = a2.a(i, j) > 12.0;
                final int n2;
                final int n = ((n2 = array[i + j * b]) * this.c + j) * this.b + i;
                final int n3;
                if (((n3 = (this.f[((n2 + 1) * this.c + j) * this.b + i] & 0xFF)) == com.mojang.minecraft.level.a.a.j.S || n3 == com.mojang.minecraft.level.a.a.k.S) && n2 <= d / 2 - 1 && b3) {
                    this.f[n] = (byte)com.mojang.minecraft.level.a.a.o.S;
                }
                if (n3 == 0) {
                    int n4 = com.mojang.minecraft.level.a.a.d.S;
                    if (n2 <= d / 2 - 1 && b2) {
                        n4 = com.mojang.minecraft.level.a.a.n.S;
                    }
                    this.f[n] = (byte)n4;
                }
            }
        }
    }
    
    private void b(final int[] array) {
        final int b = this.b;
        for (int n = this.b * this.c / 4000, i = 0; i < n; ++i) {
            this.a(i * 100 / (n - 1));
            final int nextInt = this.e.nextInt(this.b);
            final int nextInt2 = this.e.nextInt(this.c);
            for (int j = 0; j < 20; ++j) {
                int n2 = nextInt;
                int n3 = nextInt2;
                for (int k = 0; k < 20; ++k) {
                    n2 += this.e.nextInt(6) - this.e.nextInt(6);
                    n3 += this.e.nextInt(6) - this.e.nextInt(6);
                    if (n2 >= 0 && n3 >= 0 && n2 < this.b && n3 < this.c) {
                        final int n4 = array[n2 + n3 * b] + 1;
                        final int n5 = this.e.nextInt(3) + 4;
                        int n6 = 1;
                        for (int l = n4; l <= n4 + 1 + n5; ++l) {
                            int n7 = 1;
                            if (l >= n4 + 1 + n5 - 2) {
                                n7 = 2;
                            }
                            for (int n8 = n2 - n7; n8 <= n2 + n7 && n6 != 0; ++n8) {
                                for (int n9 = n3 - n7; n9 <= n3 + n7 && n6 != 0; ++n9) {
                                    if (n8 >= 0 && l >= 0 && n9 >= 0 && n8 < this.b && l < this.d && n9 < this.c) {
                                        if ((this.f[(l * this.c + n9) * this.b + n8] & 0xFF) != 0x0) {
                                            n6 = 0;
                                        }
                                    }
                                    else {
                                        n6 = 0;
                                    }
                                }
                            }
                        }
                        if (n6 != 0) {
                            final int n10 = (n4 * this.c + n3) * this.b + n2;
                            final int n11;
                            if ((n11 = (this.f[((n4 - 1) * this.c + n3) * this.b + n2] & 0xFF)) == com.mojang.minecraft.level.a.a.d.S && n4 < this.d - n5 - 1) {
                                this.f[n10 - 1 * this.b * this.c] = (byte)com.mojang.minecraft.level.a.a.e.S;
                                for (int n12 = n4 - 3 + n5; n12 <= n4 + n5; ++n12) {
                                    final int n13 = n12 - (n4 + n5);
                                    for (int n14 = 1 - n13 / 2, n15 = n2 - n14; n15 <= n2 + n14; ++n15) {
                                        final int a = n15 - n2;
                                        for (int n16 = n3 - n14; n16 <= n3 + n14; ++n16) {
                                            final int a2 = n16 - n3;
                                            if (Math.abs(a) != n14 || Math.abs(a2) != n14 || (this.e.nextInt(2) != 0 && n13 != 0)) {
                                                this.f[(n12 * this.c + n16) * this.b + n15] = (byte)com.mojang.minecraft.level.a.a.t.S;
                                            }
                                        }
                                    }
                                }
                                for (int n17 = 0; n17 < n5; ++n17) {
                                    this.f[n10 + n17 * this.b * this.c] = (byte)com.mojang.minecraft.level.a.a.s.S;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    private void a(int n, final int n2, final int n3, int b) {
        n = (byte)n;
        b = this.b;
        final int c = this.c;
        final int d = this.d;
        for (int n4 = b * c * d / 256 / 64 * n2 / 100, i = 0; i < n4; ++i) {
            this.a(i * 100 / (n4 - 1) / 4 + n3 * 100 / 4);
            float n5 = this.e.nextFloat() * b;
            float n6 = this.e.nextFloat() * d;
            float n7 = this.e.nextFloat() * c;
            final int n8 = (int)((this.e.nextFloat() + this.e.nextFloat()) * 75.0f * n2 / 100.0f);
            float n9 = (float)(this.e.nextFloat() * 3.141592653589793 * 2.0);
            float n10 = 0.0f;
            float n11 = (float)(this.e.nextFloat() * 3.141592653589793 * 2.0);
            float n12 = 0.0f;
            for (int j = 0; j < n8; ++j) {
                n5 += (float)(Math.sin(n9) * Math.cos(n11));
                n7 += (float)(Math.cos(n9) * Math.cos(n11));
                n6 += (float)Math.sin(n11);
                n9 += n10 * 0.2f;
                n10 = n10 * 0.9f + (this.e.nextFloat() - this.e.nextFloat());
                n11 = (n11 + n12 * 0.5f) * 0.5f;
                n12 = n12 * 0.9f + (this.e.nextFloat() - this.e.nextFloat());
                final float n13 = (float)(Math.sin(j * 3.141592653589793 / n8) * n2 / 100.0 + 1.0);
                for (int k = (int)(n5 - n13); k <= (int)(n5 + n13); ++k) {
                    for (int l = (int)(n6 - n13); l <= (int)(n6 + n13); ++l) {
                        for (int n14 = (int)(n7 - n13); n14 <= (int)(n7 + n13); ++n14) {
                            final float n15 = k - n5;
                            final float n16 = l - n6;
                            final float n17 = n14 - n7;
                            if (n15 * n15 + n16 * n16 * 2.0f + n17 * n17 < n13 * n13 && k >= 1 && l >= 1 && n14 >= 1 && k < this.b - 1 && l < this.d - 1 && n14 < this.c - 1) {
                                final int n18 = (l * this.c + n14) * this.b + k;
                                if (this.f[n18] == com.mojang.minecraft.level.a.a.c.S) {
                                    this.f[n18] = (byte)n;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    private void a(final int n) {
        this.a.a(n);
    }
    
    private void a() {
        int i = 0;
        for (int n = this.b * this.c * this.d / 10000, j = 0; j < n; ++j) {
            if (j % 100 == 0) {
                this.a(j * 100 / (n - 1));
            }
            final int nextInt = this.e.nextInt(this.b);
            final int nextInt2 = this.e.nextInt(this.d / 2 - 4);
            final int nextInt3 = this.e.nextInt(this.c);
            if (this.f[(nextInt2 * this.c + nextInt3) * this.b + nextInt] == 0) {
                ++i;
                this.a(nextInt, nextInt2, nextInt3, 0, com.mojang.minecraft.level.a.a.m.S);
            }
        }
        this.a(100);
        System.out.println("LavaCount: " + i);
    }
    
    private long a(int n, int n2, int n3, int n4, final int n5) {
        n4 = (byte)n5;
        final ArrayList<int[]> list = new ArrayList<int[]>();
        int i = 0;
        int n6 = 1;
        int n7 = 1;
        while (1 << n6 < this.b) {
            ++n6;
        }
        while (1 << n7 < this.c) {
            ++n7;
        }
        final int n8 = this.c - 1;
        final int n9 = this.b - 1;
        final int[] g = this.g;
        final int n10 = 0;
        ++i;
        g[n10] = ((n2 << n7) + n3 << n6) + n;
        long n11 = 0L;
        n = this.b * this.c;
        while (i > 0) {
            n2 = this.g[--i];
            if (i == 0 && list.size() > 0) {
                System.out.println("IT HAPPENED!");
                this.g = list.remove(list.size() - 1);
                i = this.g.length;
            }
            n3 = (n2 >> n6 & n8);
            final int n12 = n2 >> n6 + n7;
            int n14;
            int n13;
            for (n13 = (n14 = (n2 & n9)); n13 > 0 && this.f[n2 - 1] == 0; --n13, --n2) {}
            while (n14 < this.b && this.f[n2 + n14 - n13] == 0) {
                ++n14;
            }
            final int n15 = n2 >> n6 & n8;
            final int n16 = n2 >> n6 + n7;
            if (n15 != n3 || n16 != n12) {
                System.out.println("hoooly fuck");
            }
            int n17 = 0;
            int n18 = 0;
            int n19 = 0;
            n11 += n14 - n13;
            for (int j = n13; j < n14; ++j) {
                this.f[n2] = (byte)n4;
                if (n3 > 0) {
                    final boolean b;
                    if ((b = (this.f[n2 - this.b] == 0)) && n17 == 0) {
                        if (i == this.g.length) {
                            list.add(this.g);
                            this.g = new int[1048576];
                            i = 0;
                        }
                        this.g[i++] = n2 - this.b;
                    }
                    n17 = (b ? 1 : 0);
                }
                if (n3 < this.c - 1) {
                    final boolean b2;
                    if ((b2 = (this.f[n2 + this.b] == 0)) && n18 == 0) {
                        if (i == this.g.length) {
                            list.add(this.g);
                            this.g = new int[1048576];
                            i = 0;
                        }
                        this.g[i++] = n2 + this.b;
                    }
                    n18 = (b2 ? 1 : 0);
                }
                if (n12 > 0) {
                    final byte b3 = this.f[n2 - n];
                    if ((n4 == com.mojang.minecraft.level.a.a.l.S || n4 == com.mojang.minecraft.level.a.a.m.S) && (b3 == com.mojang.minecraft.level.a.a.j.S || b3 == com.mojang.minecraft.level.a.a.k.S)) {
                        this.f[n2 - n] = (byte)com.mojang.minecraft.level.a.a.c.S;
                    }
                    final boolean b4;
                    if ((b4 = (b3 == 0)) && n19 == 0) {
                        if (i == this.g.length) {
                            list.add(this.g);
                            this.g = new int[1048576];
                            i = 0;
                        }
                        this.g[i++] = n2 - n;
                    }
                    n19 = (b4 ? 1 : 0);
                }
                ++n2;
            }
        }
        return n11;
    }
}
