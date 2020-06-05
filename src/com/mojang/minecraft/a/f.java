// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.a;

import java.nio.IntBuffer;
import com.mojang.minecraft.level.a.a;
import org.lwjgl.opengl.GL11;
import com.mojang.minecraft.player.Player;
import com.mojang.minecraft.level.Level;

public final class f
{
    private Level c;
    private int d;
    private static c e;
    public static int a;
    private int f;
    private int g;
    private int h;
    private int i;
    private int j;
    private int k;
    private boolean[] l;
    public boolean b;
    
    public f(final Level c, final int f, final int g, final int h, final int n, final int d) {
        this.d = -1;
        this.l = new boolean[2];
        this.b = false;
        this.c = c;
        this.f = f;
        this.g = g;
        this.h = h;
        final int i = 16;
        this.k = i;
        this.j = i;
        this.i = i;
        Math.sqrt(this.i * this.i + this.j * this.j + this.k * this.k);
        this.d = d;
        this.c();
    }
    
    public final float a(final Player player) {
        final float n = player.x - this.f;
        final float n2 = player.y - this.g;
        final float n3 = player.z - this.h;
        return n * n + n2 * n2 + n3 * n3;
    }
    
    private void c() {
        for (int i = 0; i < 2; ++i) {
            GL11.glNewList(this.d + i, 4864);
            GL11.glEndList();
        }
    }
    
    public final void a() {
        this.c();
        this.c = null;
    }
    
    public final void b() {
        ++com.mojang.minecraft.a.f.a;
        for (int i = 0; i < 2; ++i) {
            final int n = i;
            final int f = this.f;
            final int g = this.g;
            final int h = this.h;
            final int n2 = this.f + this.i;
            final int n3 = this.g + this.j;
            final int n4 = this.h + this.k;
            GL11.glNewList(this.d + n, 4864);
            com.mojang.minecraft.a.f.e.b();
            boolean b = false;
            for (int j = f; j < n2; ++j) {
                for (int k = g; k < n3; ++k) {
                    for (int l = h; l < n4; ++l) {
                        final int tile;
                        if ((tile = this.c.getTile(j, k, l)) > 0) {
                            b |= com.mojang.minecraft.level.a.a.a[tile].a(com.mojang.minecraft.a.f.e, this.c, n, j, k, l);
                        }
                    }
                }
            }
            com.mojang.minecraft.a.f.e.a();
            GL11.glEndList();
            if (this.l[n] != !b) {
                this.l[n] = !b;
            }
        }
    }
    
    public final void a(final IntBuffer intBuffer, final int n) {
        if (!this.b || this.l[n]) {
            return;
        }
        intBuffer.put(this.d + n);
    }
    
    public final void a(final d d) {
        this.b = d.a((float)this.f, (float)this.g, (float)this.h, (float)(this.f + this.i), (float)(this.g + this.j), (float)(this.h + this.k));
    }
    
    static {
        f.e = c.a;
        f.a = 0;
    }
}
