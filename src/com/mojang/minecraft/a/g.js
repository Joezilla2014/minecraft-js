
package com.mojang.minecraft.a;

import java.util.Comparator;
import java.util.Arrays;
import com.mojang.minecraft.player.Player;
import com.mojang.minecraft.Entity;
import org.lwjgl.opengl.GL11;
import java.util.HashSet;
import org.lwjgl.BufferUtils;
import java.util.Set;
import java.nio.IntBuffer;
import com.mojang.minecraft.level.Level;

public final class g
{
    public Level a;
    public a b;
    public int c;
    public int d;
    public IntBuffer e;
    public Set f;
    private f[] i;
    public f[] g;
    private int j;
    private int k;
    private int l;
    private int m;
    public int h;
    private float n;
    private float o;
    private float p;
    
    public g(final a b) {
        this.d = 0;
        this.e = BufferUtils.createIntBuffer(65536);
        this.f = new HashSet();
        this.h = 0;
        this.n = -9999.0f;
        this.o = -9999.0f;
        this.p = -9999.0f;
        this.b = b;
        this.c = GL11.glGenLists(2);
        this.m = GL11.glGenLists(4096 << 6 << 1);
    }
    
    public final void a() {
        if (this.g != null) {
            for (int i = 0; i < this.g.length; ++i) {
                this.g[i].a();
            }
        }
        this.j = this.a.width / 16;
        this.k = this.a.depth / 16;
        this.l = this.a.height / 16;
        this.g = new f[this.j * this.k * this.l];
        this.i = new f[this.j * this.k * this.l];
        int n = 0;
        for (int j = 0; j < this.j; ++j) {
            for (int k = 0; k < this.k; ++k) {
                for (int l = 0; l < this.l; ++l) {
                    this.g[(l * this.k + k) * this.j + j] = new f(this.a, j << 4, k << 4, l << 4, 16, this.m + n);
                    this.i[(l * this.k + k) * this.j + j] = this.g[(l * this.k + k) * this.j + j];
                    n += 2;
                }
            }
        }
        this.f.clear();
        GL11.glNewList(this.c, 4864);
        GL11.glEnable(3553);
        GL11.glBindTexture(3553, this.b.a("/rock.png"));
        final float n2;
        GL11.glColor4f(n2 = 0.5f, n2, n2, 1.0f);
        final c a = com.mojang.minecraft.a.c.a;
        final float groundLevel = this.a.getGroundLevel();
        int n3 = 128;
        if (128 > this.a.width) {
            n3 = this.a.width;
        }
        if (n3 > this.a.height) {
            n3 = this.a.height;
        }
        final int n4 = 2048 / n3;
        a.b();
        for (int n5 = -n3 * n4; n5 < this.a.width + n3 * n4; n5 += n3) {
            for (int n6 = -n3 * n4; n6 < this.a.height + n3 * n4; n6 += n3) {
                float n7 = groundLevel;
                if (n5 >= 0 && n6 >= 0 && n5 < this.a.width && n6 < this.a.height) {
                    n7 = 0.0f;
                }
                a.a((float)n5, n7, (float)(n6 + n3), 0.0f, (float)n3);
                a.a((float)(n5 + n3), n7, (float)(n6 + n3), (float)n3, (float)n3);
                a.a((float)(n5 + n3), n7, (float)n6, (float)n3, 0.0f);
                a.a((float)n5, n7, (float)n6, 0.0f, 0.0f);
            }
        }
        a.a();
        GL11.glBindTexture(3553, this.b.a("/rock.png"));
        GL11.glColor3f(0.8f, 0.8f, 0.8f);
        a.b();
        for (int n8 = 0; n8 < this.a.width; n8 += n3) {
            a.a((float)n8, 0.0f, 0.0f, 0.0f, 0.0f);
            a.a((float)(n8 + n3), 0.0f, 0.0f, (float)n3, 0.0f);
            a.a((float)(n8 + n3), groundLevel, 0.0f, (float)n3, groundLevel);
            a.a((float)n8, groundLevel, 0.0f, 0.0f, groundLevel);
            a.a((float)n8, groundLevel, (float)this.a.height, 0.0f, groundLevel);
            a.a((float)(n8 + n3), groundLevel, (float)this.a.height, (float)n3, groundLevel);
            a.a((float)(n8 + n3), 0.0f, (float)this.a.height, (float)n3, 0.0f);
            a.a((float)n8, 0.0f, (float)this.a.height, 0.0f, 0.0f);
        }
        GL11.glColor3f(0.6f, 0.6f, 0.6f);
        for (int n9 = 0; n9 < this.a.height; n9 += n3) {
            a.a(0.0f, groundLevel, (float)n9, 0.0f, 0.0f);
            a.a(0.0f, groundLevel, (float)(n9 + n3), (float)n3, 0.0f);
            a.a(0.0f, 0.0f, (float)(n9 + n3), (float)n3, groundLevel);
            a.a(0.0f, 0.0f, (float)n9, 0.0f, groundLevel);
            a.a((float)this.a.width, 0.0f, (float)n9, 0.0f, groundLevel);
            a.a((float)this.a.width, 0.0f, (float)(n9 + n3), (float)n3, groundLevel);
            a.a((float)this.a.width, groundLevel, (float)(n9 + n3), (float)n3, 0.0f);
            a.a((float)this.a.width, groundLevel, (float)n9, 0.0f, 0.0f);
        }
        a.a();
        GL11.glDisable(3042);
        GL11.glDisable(3553);
        GL11.glEndList();
        GL11.glNewList(this.c + 1, 4864);
        GL11.glEnable(3553);
        GL11.glColor3f(1.0f, 1.0f, 1.0f);
        GL11.glBindTexture(3553, this.b.a("/water.png"));
        final float waterLevel = this.a.getWaterLevel();
        GL11.glEnable(3042);
        GL11.glBlendFunc(770, 771);
        final c a2 = com.mojang.minecraft.a.c.a;
        int n10 = 128;
        if (128 > this.a.width) {
            n10 = this.a.width;
        }
        if (n10 > this.a.height) {
            n10 = this.a.height;
        }
        final int n11 = 2048 / n10;
        a2.b();
        for (int n12 = -n10 * n11; n12 < this.a.width + n10 * n11; n12 += n10) {
            for (int n13 = -n10 * n11; n13 < this.a.height + n10 * n11; n13 += n10) {
                final float n14 = waterLevel - 0.1f;
                if (n12 < 0 || n13 < 0 || n12 >= this.a.width || n13 >= this.a.height) {
                    a2.a((float)n12, n14, (float)(n13 + n10), 0.0f, (float)n10);
                    a2.a((float)(n12 + n10), n14, (float)(n13 + n10), (float)n10, (float)n10);
                    a2.a((float)(n12 + n10), n14, (float)n13, (float)n10, 0.0f);
                    a2.a((float)n12, n14, (float)n13, 0.0f, 0.0f);
                    a2.a((float)n12, n14, (float)n13, 0.0f, 0.0f);
                    a2.a((float)(n12 + n10), n14, (float)n13, (float)n10, 0.0f);
                    a2.a((float)(n12 + n10), n14, (float)(n13 + n10), (float)n10, (float)n10);
                    a2.a((float)n12, n14, (float)(n13 + n10), 0.0f, (float)n10);
                }
            }
        }
        a2.a();
        GL11.glDisable(3042);
        GL11.glDisable(3553);
        GL11.glEndList();
        this.a(0, 0, 0, this.a.width, this.a.depth, this.a.height);
    }
    
    public final void a(final d d, final float n) {
        for (int i = 0; i < this.a.entities.size(); ++i) {
            if (d.a(((Entity)this.a.entities.get(i)).bb)) {
                ((Entity)this.a.entities.get(i)).render$2a8c5a(this.b, n);
            }
        }
    }
    
    public final int a(final Player player, final int n) {
        final float n2 = player.x - this.n;
        final float n3 = player.y - this.o;
        final float n4 = player.z - this.p;
        if (n2 * n2 + n3 * n3 + n4 * n4 > 64.0f) {
            this.n = player.x;
            this.o = player.y;
            this.p = player.z;
            Arrays.sort(this.i, new e(player));
        }
        this.e.clear();
        for (int i = 0; i < this.i.length; ++i) {
            this.i[i].a(this.e, n);
        }
        this.e.flip();
        if (this.e.remaining() > 0) {
            GL11.glEnable(3553);
            GL11.glBindTexture(3553, this.b.a("/terrain.png"));
            GL11.glCallLists(this.e);
            GL11.glDisable(3553);
        }
        return this.e.remaining();
    }
    
    public final void a(float n) {
        GL11.glEnable(3553);
        GL11.glBindTexture(3553, this.b.a("/clouds.png"));
        GL11.glColor4f(1.0f, 1.0f, 1.0f, 1.0f);
        final c a = com.mojang.minecraft.a.c.a;
        final float n2 = 4.8828125E-4f;
        final float n3 = (float)(this.a.depth + 2);
        n = (this.h + n) * n2 * 0.03f;
        a.b();
        for (int i = -2048; i < this.a.width + 2048; i += 512) {
            for (int j = -2048; j < this.a.height + 2048; j += 512) {
                a.a((float)i, n3, (float)(j + 512), i * n2 + n, (j + 512) * n2);
                a.a((float)(i + 512), n3, (float)(j + 512), (i + 512) * n2 + n, (j + 512) * n2);
                a.a((float)(i + 512), n3, (float)j, (i + 512) * n2 + n, j * n2);
                a.a((float)i, n3, (float)j, i * n2 + n, j * n2);
                a.a((float)i, n3, (float)j, i * n2 + n, j * n2);
                a.a((float)(i + 512), n3, (float)j, (i + 512) * n2 + n, j * n2);
                a.a((float)(i + 512), n3, (float)(j + 512), (i + 512) * n2 + n, (j + 512) * n2);
                a.a((float)i, n3, (float)(j + 512), i * n2 + n, (j + 512) * n2);
            }
        }
        a.a();
        GL11.glDisable(3553);
        a.b();
        a.a(0.5f, 0.8f, 1.0f);
        final float n4 = (float)(this.a.depth + 10);
        for (int k = -2048; k < this.a.width + 2048; k += 512) {
            for (int l = -2048; l < this.a.height + 2048; l += 512) {
                a.b((float)k, n4, (float)l);
                a.b((float)(k + 512), n4, (float)l);
                a.b((float)(k + 512), n4, (float)(l + 512));
                a.b((float)k, n4, (float)(l + 512));
            }
        }
        a.a();
    }
    
    public final void a(final int n, final int n2, final int n3) {
        final int tile;
        if ((tile = this.a.getTile(n, n2, n3)) == 0 || !com.mojang.minecraft.level.a.a.a[tile].b()) {
            return;
        }
        GL11.glEnable(3553);
        GL11.glColor4f(0.2f, 0.2f, 0.2f, 1.0f);
        GL11.glDepthFunc(513);
        final c a;
        (a = com.mojang.minecraft.a.c.a).b();
        for (int i = 0; i < 6; ++i) {
            com.mojang.minecraft.level.a.a.a[tile].a(a, n, n2, n3, i);
        }
        a.a();
        GL11.glCullFace(1028);
        a.b();
        for (int j = 0; j < 6; ++j) {
            com.mojang.minecraft.level.a.a.a[tile].a(a, n, n2, n3, j);
        }
        a.a();
        GL11.glCullFace(1029);
        GL11.glDisable(3553);
        GL11.glDepthFunc(515);
    }
    
    public final void a(final Player player, final com.mojang.minecraft.e e, int i, final int n) {
        final c a = com.mojang.minecraft.a.c.a;
        GL11.glEnable(3042);
        GL11.glEnable(3008);
        GL11.glBlendFunc(770, 1);
        GL11.glColor4f(1.0f, 1.0f, 1.0f, ((float)Math.sin(System.currentTimeMillis() / 100.0) * 0.2f + 0.4f) * 0.5f);
        if (i == 0) {
            a.b();
            for (i = 0; i < 6; ++i) {
                com.mojang.minecraft.level.a.a.a(player, a, e.a, e.b, e.c, i);
            }
            a.a();
        }
        else {
            GL11.glBlendFunc(770, 771);
            final float n2;
            GL11.glColor4f(n2 = (float)Math.sin(System.currentTimeMillis() / 100.0) * 0.2f + 0.8f, n2, n2, (float)Math.sin(System.currentTimeMillis() / 200.0) * 0.2f + 0.5f);
            GL11.glEnable(3553);
            GL11.glBindTexture(3553, this.b.a("/terrain.png"));
            int a2 = e.a;
            i = e.b;
            int c = e.c;
            if (e.d == 0) {
                --i;
            }
            if (e.d == 1) {
                ++i;
            }
            if (e.d == 2) {
                --c;
            }
            if (e.d == 3) {
                ++c;
            }
            if (e.d == 4) {
                --a2;
            }
            if (e.d == 5) {
                ++a2;
            }
            a.b();
            a.c();
            com.mojang.minecraft.level.a.a.a[n].a(a, this.a, 0, a2, i, c);
            com.mojang.minecraft.level.a.a.a[n].a(a, this.a, 1, a2, i, c);
            a.a();
            GL11.glDisable(3553);
        }
        GL11.glDisable(3042);
        GL11.glDisable(3008);
    }
    
    public static void a(final com.mojang.minecraft.e e, final int n) {
        GL11.glEnable(3042);
        GL11.glBlendFunc(770, 771);
        GL11.glColor4f(0.0f, 0.0f, 0.0f, 0.4f);
        float n2 = (float)e.a;
        float n3 = (float)e.b;
        float n4 = (float)e.c;
        if (n == 1) {
            if (e.d == 0) {
                --n3;
            }
            if (e.d == 1) {
                ++n3;
            }
            if (e.d == 2) {
                --n4;
            }
            if (e.d == 3) {
                ++n4;
            }
            if (e.d == 4) {
                --n2;
            }
            if (e.d == 5) {
                ++n2;
            }
        }
        GL11.glBegin(3);
        GL11.glVertex3f(n2, n3, n4);
        GL11.glVertex3f(n2 + 1.0f, n3, n4);
        GL11.glVertex3f(n2 + 1.0f, n3, n4 + 1.0f);
        GL11.glVertex3f(n2, n3, n4 + 1.0f);
        GL11.glVertex3f(n2, n3, n4);
        GL11.glEnd();
        GL11.glBegin(3);
        GL11.glVertex3f(n2, n3 + 1.0f, n4);
        GL11.glVertex3f(n2 + 1.0f, n3 + 1.0f, n4);
        GL11.glVertex3f(n2 + 1.0f, n3 + 1.0f, n4 + 1.0f);
        GL11.glVertex3f(n2, n3 + 1.0f, n4 + 1.0f);
        GL11.glVertex3f(n2, n3 + 1.0f, n4);
        GL11.glEnd();
        GL11.glBegin(1);
        GL11.glVertex3f(n2, n3, n4);
        GL11.glVertex3f(n2, n3 + 1.0f, n4);
        GL11.glVertex3f(n2 + 1.0f, n3, n4);
        GL11.glVertex3f(n2 + 1.0f, n3 + 1.0f, n4);
        GL11.glVertex3f(n2 + 1.0f, n3, n4 + 1.0f);
        GL11.glVertex3f(n2 + 1.0f, n3 + 1.0f, n4 + 1.0f);
        GL11.glVertex3f(n2, n3, n4 + 1.0f);
        GL11.glVertex3f(n2, n3 + 1.0f, n4 + 1.0f);
        GL11.glEnd();
        GL11.glDisable(3042);
    }
    
    public final void a(int i, int n, int n2, int n3, int n4, int n5) {
        i /= 16;
        n /= 16;
        n2 /= 16;
        n3 /= 16;
        n4 /= 16;
        n5 /= 16;
        if (i < 0) {
            i = 0;
        }
        if (n < 0) {
            n = 0;
        }
        if (n2 < 0) {
            n2 = 0;
        }
        if (n3 > this.j - 1) {
            n3 = this.j - 1;
        }
        if (n4 > this.k - 1) {
            n4 = this.k - 1;
        }
        if (n5 > this.l - 1) {
            n5 = this.l - 1;
        }
        int j;
        int k;
        for (i = i; i <= n3; ++i) {
            for (j = n; j <= n4; ++j) {
                for (k = n2; k <= n5; ++k) {
                    this.f.add(this.g[(k * this.k + j) * this.j + i]);
                }
            }
        }
    }
}
