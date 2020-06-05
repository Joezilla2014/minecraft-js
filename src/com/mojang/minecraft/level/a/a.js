
package com.mojang.minecraft.level.a;

import com.mojang.minecraft.particle.Particle;
import com.mojang.minecraft.phys.AABB;
import com.mojang.minecraft.Entity;
import com.mojang.minecraft.level.Level;
import com.mojang.minecraft.a.c;
import java.util.Random;

public class a
{
    public static final a[] a;
    public static final boolean[] b;
    private static int[] U;
    public static final a c;
    public static final a d;
    public static final a e;
    public static final a f;
    public static final a g;
    public static final a h;
    public static final a i;
    public static final a j;
    public static final a k;
    public static final a l;
    public static final a m;
    public static final a n;
    public static final a o;
    public static final a p;
    public static final a q;
    public static final a r;
    public static final a s;
    public static final a t;
    public static final a u;
    public static final a v;
    public static final a w;
    public static final a x;
    public static final a y;
    public static final a z;
    public static final a A;
    public static final a B;
    public static final a C;
    public static final a D;
    public static final a E;
    public static final a F;
    public static final a G;
    public static final a H;
    public static final a I;
    public static final a J;
    public static final a K;
    public static final a L;
    public static final a M;
    public static final a N;
    public static final a O;
    public static final a P;
    public static final a Q;
    public int R;
    public final int S;
    private float V;
    private float W;
    private float X;
    private float Y;
    private float Z;
    private float aa;
    public float T;
    
    protected a(final int s) {
        new Random();
        com.mojang.minecraft.level.a.a.a[s] = this;
        this.S = s;
        this.a(0.0f, 0.0f, 0.0f, 1.0f, 1.0f, 1.0f);
    }
    
    protected final void a(final boolean b) {
        com.mojang.minecraft.level.a.a.b[this.S] = b;
    }
    
    protected final void a(final float v, final float w, final float x, final float y, final float z, final float aa) {
        this.V = v;
        this.W = w;
        this.X = x;
        this.Y = y;
        this.Z = z;
        this.aa = aa;
    }
    
    protected a(final int n, final int r) {
        this(n);
        this.R = r;
    }
    
    public final void a(final int n) {
        com.mojang.minecraft.level.a.a.U[this.S] = 16;
    }
    
    public boolean a(final c c, final Level level, final int n, final int n2, final int n3, final int n4) {
        boolean b = false;
        final float n5 = 0.5f;
        final float n6 = 0.8f;
        final float n7 = 0.6f;
        if (this.a(level, n2, n3 - 1, n4, n, 0)) {
            final float a = this.a(level, n2, n3 - 1, n4);
            c.a(n5 * a, n5 * a, n5 * a);
            this.a(c, n2, n3, n4, 0);
            b = true;
        }
        if (this.a(level, n2, n3 + 1, n4, n, 1)) {
            final float a2 = this.a(level, n2, n3 + 1, n4);
            c.a(a2 * 1.0f, a2 * 1.0f, a2 * 1.0f);
            this.a(c, n2, n3, n4, 1);
            b = true;
        }
        if (this.a(level, n2, n3, n4 - 1, n, 2)) {
            final float a3 = this.a(level, n2, n3, n4 - 1);
            c.a(n6 * a3, n6 * a3, n6 * a3);
            this.a(c, n2, n3, n4, 2);
            b = true;
        }
        if (this.a(level, n2, n3, n4 + 1, n, 3)) {
            final float a4 = this.a(level, n2, n3, n4 + 1);
            c.a(n6 * a4, n6 * a4, n6 * a4);
            this.a(c, n2, n3, n4, 3);
            b = true;
        }
        if (this.a(level, n2 - 1, n3, n4, n, 4)) {
            final float a5 = this.a(level, n2 - 1, n3, n4);
            c.a(n7 * a5, n7 * a5, n7 * a5);
            this.a(c, n2, n3, n4, 4);
            b = true;
        }
        if (this.a(level, n2 + 1, n3, n4, n, 5)) {
            final float a6 = this.a(level, n2 + 1, n3, n4);
            c.a(n7 * a6, n7 * a6, n7 * a6);
            this.a(c, n2, n3, n4, 5);
            b = true;
        }
        return b;
    }
    
    protected float a(final Level level, final int n, final int n2, final int n3) {
        return level.getBrightness(n, n2, n3);
    }
    
    protected boolean a(final Level level, final int n, final int n2, final int n3, final int n4, final int n5) {
        return n4 != 1 && !level.isSolidTile(n, n2, n3);
    }
    
    protected int b(final int n) {
        return this.R;
    }
    
    public void a(final c c, final int n, final int n2, final int n3, final int n4) {
        final int b;
        final int n5 = (b = this.b(n4)) % 16 << 4;
        final int n6 = b / 16 << 4;
        final float n7 = n5 / 256.0f;
        final float n8 = (n5 + 15.99f) / 256.0f;
        final float n9 = n6 / 256.0f;
        final float n10 = (n6 + 15.99f) / 256.0f;
        final float n11 = n + this.V;
        final float n12 = n + this.Y;
        final float n13 = n2 + this.W;
        final float n14 = n2 + this.Z;
        final float n15 = n3 + this.X;
        final float n16 = n3 + this.aa;
        if (n4 == 0) {
            c.a(n11, n13, n16, n7, n10);
            c.a(n11, n13, n15, n7, n9);
            c.a(n12, n13, n15, n8, n9);
            c.a(n12, n13, n16, n8, n10);
            return;
        }
        if (n4 == 1) {
            c.a(n12, n14, n16, n8, n10);
            c.a(n12, n14, n15, n8, n9);
            c.a(n11, n14, n15, n7, n9);
            c.a(n11, n14, n16, n7, n10);
            return;
        }
        if (n4 == 2) {
            c.a(n11, n14, n15, n8, n9);
            c.a(n12, n14, n15, n7, n9);
            c.a(n12, n13, n15, n7, n10);
            c.a(n11, n13, n15, n8, n10);
            return;
        }
        if (n4 == 3) {
            c.a(n11, n14, n16, n7, n9);
            c.a(n11, n13, n16, n7, n10);
            c.a(n12, n13, n16, n8, n10);
            c.a(n12, n14, n16, n8, n9);
            return;
        }
        if (n4 == 4) {
            c.a(n11, n14, n16, n8, n9);
            c.a(n11, n14, n15, n7, n9);
            c.a(n11, n13, n15, n7, n10);
            c.a(n11, n13, n16, n8, n10);
            return;
        }
        if (n4 == 5) {
            c.a(n12, n13, n16, n7, n10);
            c.a(n12, n13, n15, n8, n10);
            c.a(n12, n14, n15, n8, n9);
            c.a(n12, n14, n16, n7, n9);
        }
    }
    
    public final void b(final c c, final int n, final int n2, final int n3, final int n4) {
        final int b;
        final float n6;
        final float n5 = (n6 = (b = this.b(n4)) % 16 / 16.0f) + 0.0624375f;
        final float n8;
        final float n7 = (n8 = b / 16 / 16.0f) + 0.0624375f;
        final float n9 = n + this.V;
        final float n10 = n + this.Y;
        final float n11 = n2 + this.W;
        final float n12 = n2 + this.Z;
        final float n13 = n3 + this.X;
        final float n14 = n3 + this.aa;
        if (n4 == 0) {
            c.a(n10, n11, n14, n5, n7);
            c.a(n10, n11, n13, n5, n8);
            c.a(n9, n11, n13, n6, n8);
            c.a(n9, n11, n14, n6, n7);
        }
        if (n4 == 1) {
            c.a(n9, n12, n14, n6, n7);
            c.a(n9, n12, n13, n6, n8);
            c.a(n10, n12, n13, n5, n8);
            c.a(n10, n12, n14, n5, n7);
        }
        if (n4 == 2) {
            c.a(n9, n11, n13, n5, n7);
            c.a(n10, n11, n13, n6, n7);
            c.a(n10, n12, n13, n6, n8);
            c.a(n9, n12, n13, n5, n8);
        }
        if (n4 == 3) {
            c.a(n10, n12, n14, n5, n8);
            c.a(n10, n11, n14, n5, n7);
            c.a(n9, n11, n14, n6, n7);
            c.a(n9, n12, n14, n6, n8);
        }
        if (n4 == 4) {
            c.a(n9, n11, n14, n5, n7);
            c.a(n9, n11, n13, n6, n7);
            c.a(n9, n12, n13, n6, n8);
            c.a(n9, n12, n14, n5, n8);
        }
        if (n4 == 5) {
            c.a(n10, n12, n14, n6, n8);
            c.a(n10, n12, n13, n5, n8);
            c.a(n10, n11, n13, n5, n7);
            c.a(n10, n11, n14, n6, n7);
        }
    }
    
    public static void a(final Entity entity, final c c, final int n, final int n2, final int n3, final int n4) {
        final float n5 = (float)n;
        final float n6 = n + 1.0f;
        final float n7 = (float)n2;
        final float n8 = n2 + 1.0f;
        final float n9 = (float)n3;
        final float n10 = n3 + 1.0f;
        if (n4 == 0 && n2 > entity.y) {
            c.b(n5, n7, n10);
            c.b(n5, n7, n9);
            c.b(n6, n7, n9);
            c.b(n6, n7, n10);
        }
        if (n4 == 1 && n2 < entity.y) {
            c.b(n6, n8, n10);
            c.b(n6, n8, n9);
            c.b(n5, n8, n9);
            c.b(n5, n8, n10);
        }
        if (n4 == 2 && n3 > entity.z) {
            c.b(n5, n8, n9);
            c.b(n6, n8, n9);
            c.b(n6, n7, n9);
            c.b(n5, n7, n9);
        }
        if (n4 == 3 && n3 < entity.z) {
            c.b(n5, n8, n10);
            c.b(n5, n7, n10);
            c.b(n6, n7, n10);
            c.b(n6, n8, n10);
        }
        if (n4 == 4 && n > entity.x) {
            c.b(n5, n8, n10);
            c.b(n5, n8, n9);
            c.b(n5, n7, n9);
            c.b(n5, n7, n10);
        }
        if (n4 == 5 && n < entity.x) {
            c.b(n6, n7, n10);
            c.b(n6, n7, n9);
            c.b(n6, n8, n9);
            c.b(n6, n8, n10);
        }
    }
    
    public AABB a(final int n, final int n2, final int n3) {
        return new AABB((float)n, (float)n2, (float)n3, (float)(n + 1), (float)(n2 + 1), (float)(n3 + 1));
    }
    
    public boolean a() {
        return true;
    }
    
    public boolean b() {
        return true;
    }
    
    public void a(final Level level, final int n, final int n2, final int n3, final Random random) {
    }
    
    public final void a(final Level level, final int n, final int n2, final int n3, final com.mojang.minecraft.particle.a a) {
        for (int i = 0; i < 4; ++i) {
            for (int j = 0; j < 4; ++j) {
                for (int k = 0; k < 4; ++k) {
                    final float n4 = n + (i + 0.5f) / 4;
                    final float n5 = n2 + (j + 0.5f) / 4;
                    final float n6 = n3 + (k + 0.5f) / 4;
                    a.a.add(new Particle(level, n4, n5, n6, n4 - n - 0.5f, n5 - n2 - 0.5f, n6 - n3 - 0.5f, this));
                }
            }
        }
    }
    
    public com.mojang.minecraft.level.c.a c() {
        return com.mojang.minecraft.level.c.a.a;
    }
    
    public void a(final Level level, final int n, final int n2, final int n3, final int n4) {
    }
    
    public void b(final Level level, final int n, final int n2, final int n3) {
    }
    
    public int d() {
        return 0;
    }
    
    public void c(final Level level, final int n, final int n2, final int n3) {
    }
    
    public void d(final Level level, final int n, final int n2, final int n3) {
    }
    
    static {
        a = new a[256];
        b = new boolean[256];
        com.mojang.minecraft.level.a.a.U = new int[256];
        final a a2 = new a(1, 1);
        final float t2 = 1.0f;
        final a c2 = a2;
        a2.T = t2;
        c = c2;
        final g g2 = new g(2);
        final float t3 = 1.0f;
        final g d2 = g2;
        g2.T = t3;
        d = d2;
        final com.mojang.minecraft.level.a.c c3 = new com.mojang.minecraft.level.a.c(3, 2);
        final float t4 = 1.0f;
        final com.mojang.minecraft.level.a.c e2 = c3;
        c3.T = t4;
        e = e2;
        final a a3 = new a(4, 16);
        final float t5 = 1.0f;
        final a f2 = a3;
        a3.T = t5;
        f = f2;
        final a a4 = new a(5, 4);
        final float t6 = 1.0f;
        final a g3 = a4;
        a4.T = t6;
        g = g3;
        final h h2 = new h(6, 15);
        final float t7 = 1.0f;
        final h h3 = h2;
        h2.T = t7;
        h = h3;
        final a a5 = new a(7, 17);
        final float t8 = 1.0f;
        final a i2 = a5;
        a5.T = t8;
        i = i2;
        final k k2 = new k(8, com.mojang.minecraft.level.c.a.b);
        final float t9 = 1.0f;
        final k j2 = k2;
        k2.T = t9;
        j = j2;
        final e e3 = new e(9, com.mojang.minecraft.level.c.a.b);
        final float t10 = 1.0f;
        final e k3 = e3;
        e3.T = t10;
        k = k3;
        final k k4 = new k(10, com.mojang.minecraft.level.c.a.c);
        final float t11 = 1.0f;
        final k l2 = k4;
        k4.T = t11;
        l = l2;
        final e e4 = new e(11, com.mojang.minecraft.level.c.a.c);
        final float t12 = 1.0f;
        final e m2 = e4;
        e4.T = t12;
        m = m2;
        final d d3 = new d(12, 18);
        final float t13 = 1.0f;
        final d n2 = d3;
        d3.T = t13;
        n = n2;
        final d d4 = new d(13, 19);
        final float t14 = 1.0f;
        final d o2 = d4;
        d4.T = t14;
        o = o2;
        final a a6 = new a(14, 32);
        final float t15 = 1.0f;
        final a p2 = a6;
        a6.T = t15;
        p = p2;
        final a a7 = new a(15, 33);
        final float t16 = 1.0f;
        final a q2 = a7;
        a7.T = t16;
        q = q2;
        final a a8 = new a(16, 34);
        final float t17 = 1.0f;
        final a r2 = a8;
        a8.T = t17;
        r = r2;
        final f f3 = new f(17);
        final float t18 = 1.0f;
        final f s2 = f3;
        f3.T = t18;
        s = s2;
        final b b2 = new b(18, 22, true);
        final float t19 = 0.4f;
        final b t20 = b2;
        b2.T = t19;
        t = t20;
        final i i3 = new i(19);
        final float t21 = 0.9f;
        final i u2 = i3;
        i3.T = t21;
        u = u2;
        final j j3 = new j(20, 49, false);
        final float t22 = 1.0f;
        final j v2 = j3;
        j3.T = t22;
        v = v2;
        final a a9 = new a(21, 64);
        final float t23 = 1.0f;
        final a w2 = a9;
        a9.T = t23;
        w = w2;
        final a a10 = new a(22, 65);
        final float t24 = 1.0f;
        final a x2 = a10;
        a10.T = t24;
        x = x2;
        final a a11 = new a(23, 66);
        final float t25 = 1.0f;
        final a y2 = a11;
        a11.T = t25;
        y = y2;
        final a a12 = new a(24, 67);
        final float t26 = 1.0f;
        final a z2 = a12;
        a12.T = t26;
        z = z2;
        final a a13 = new a(25, 68);
        final float t27 = 1.0f;
        final a a14 = a13;
        a13.T = t27;
        A = a14;
        final a a15 = new a(26, 69);
        final float t28 = 1.0f;
        final a b3 = a15;
        a15.T = t28;
        B = b3;
        final a a16 = new a(27, 70);
        final float t29 = 1.0f;
        final a c4 = a16;
        a16.T = t29;
        C = c4;
        final a a17 = new a(28, 71);
        final float t30 = 1.0f;
        final a d5 = a17;
        a17.T = t30;
        D = d5;
        final a a18 = new a(29, 72);
        final float t31 = 1.0f;
        final a e5 = a18;
        a18.T = t31;
        E = e5;
        final a a19 = new a(30, 73);
        final float t32 = 1.0f;
        final a f4 = a19;
        a19.T = t32;
        F = f4;
        final a a20 = new a(31, 74);
        final float t33 = 1.0f;
        final a g4 = a20;
        a20.T = t33;
        G = g4;
        final a a21 = new a(32, 75);
        final float t34 = 1.0f;
        final a h4 = a21;
        a21.T = t34;
        H = h4;
        final a a22 = new a(33, 76);
        final float t35 = 1.0f;
        final a i4 = a22;
        a22.T = t35;
        I = i4;
        final a a23 = new a(34, 77);
        final float t36 = 1.0f;
        final a j4 = a23;
        a23.T = t36;
        J = j4;
        final a a24 = new a(35, 78);
        final float t37 = 1.0f;
        final a k5 = a24;
        a24.T = t37;
        K = k5;
        final a a25 = new a(36, 79);
        final float t38 = 1.0f;
        final a l3 = a25;
        a25.T = t38;
        L = l3;
        final h h5 = new h(37, 13);
        final float t39 = 1.0f;
        final h m3 = h5;
        h5.T = t39;
        M = m3;
        final h h6 = new h(38, 12);
        final float t40 = 1.0f;
        final h n3 = h6;
        h6.T = t40;
        N = n3;
        final h h7 = new h(39, 29);
        final float t41 = 1.0f;
        final h o3 = h7;
        h7.T = t41;
        O = o3;
        final h h8 = new h(40, 28);
        final float t42 = 1.0f;
        final h p3 = h8;
        h8.T = t42;
        P = p3;
        final a a26 = new a(41, 40);
        final float t43 = 1.0f;
        final a q3 = a26;
        a26.T = t43;
        Q = q3;
    }
}
