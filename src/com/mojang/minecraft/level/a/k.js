
package com.mojang.minecraft.level.a;

import com.mojang.minecraft.phys.AABB;
import com.mojang.minecraft.a.c;
import java.util.Random;
import com.mojang.minecraft.level.Level;

public class k extends a
{
    protected com.mojang.minecraft.level.c.a U;
    protected int V;
    protected int W;
    
    protected k(final int w, final com.mojang.minecraft.level.c.a u) {
        super(w);
        this.U = u;
        this.R = 14;
        if (u == com.mojang.minecraft.level.c.a.c) {
            this.R = 30;
        }
        this.W = w;
        this.V = w + 1;
        final float n = 0.01f;
        final float n2 = 0.1f;
        this.a(n + 0.0f, 0.0f - n2 + n, n + 0.0f, n + 1.0f, 1.0f - n2 + n, n + 1.0f);
        this.a(true);
        if (u == com.mojang.minecraft.level.c.a.c) {
            this.a(16);
        }
    }
    
    @Override
    public final void b(final Level level, final int n, final int n2, final int n3) {
        level.addToTickNextTick(n, n2, n3, this.W);
    }
    
    @Override
    public void a(Level level, int n, int n2, int n3, final Random random) {
        final k k = this;
        final Level level2 = level;
        final int n4 = n;
        final int n5 = n2;
        n3 = n3;
        n2 = n5;
        n = n4;
        level = level2;
        this = k;
        boolean b = false;
        while (level.getTile(n, --n2, n3) == 0 && this.e(level, n, n2, n3)) {
            final boolean setTile;
            if (setTile = level.setTile(n, n2, n3, this.W)) {
                b = true;
            }
            if (setTile && this.U != com.mojang.minecraft.level.c.a.c) {
                continue;
            }
            break;
        }
        ++n2;
        if (this.U == com.mojang.minecraft.level.c.a.b || !b) {
            b = (b | this.f(level, n - 1, n2, n3) | this.f(level, n + 1, n2, n3) | this.f(level, n, n2, n3 - 1) | this.f(level, n, n2, n3 + 1));
        }
        if (!b) {
            level.setTileNoUpdate(n, n2, n3, this.V);
        }
        else {
            level.addToTickNextTick(n, n2, n3, this.W);
        }
    }
    
    private boolean e(final Level level, final int n, final int n2, final int n3) {
        if (this.U == com.mojang.minecraft.level.c.a.b) {
            for (int i = n - 2; i <= n + 2; ++i) {
                for (int j = n2 - 2; j <= n2 + 2; ++j) {
                    for (int k = n3 - 2; k <= n3 + 2; ++k) {
                        if (level.getTile(i, j, k) == com.mojang.minecraft.level.a.a.u.S) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }
    
    private boolean f(final Level level, final int n, final int n2, final int n3) {
        if (level.getTile(n, n2, n3) == 0) {
            if (!this.e(level, n, n2, n3)) {
                return false;
            }
            if (level.setTile(n, n2, n3, this.W)) {
                level.addToTickNextTick(n, n2, n3, this.W);
            }
        }
        return false;
    }
    
    @Override
    protected final float a(final Level level, final int n, final int n2, final int n3) {
        if (this.U == com.mojang.minecraft.level.c.a.c) {
            return 100.0f;
        }
        return level.getBrightness(n, n2, n3);
    }
    
    @Override
    protected final boolean a(final Level level, final int n, final int n2, final int n3, int tile, final int n4) {
        return n >= 0 && n2 >= 0 && n3 >= 0 && n < level.width && n3 < level.height && (tile == 1 || this.U != com.mojang.minecraft.level.c.a.b) && (tile = level.getTile(n, n2, n3)) != this.W && tile != this.V && ((n4 == 1 && (level.getTile(n - 1, n2, n3) == 0 || level.getTile(n + 1, n2, n3) == 0 || level.getTile(n, n2, n3 - 1) == 0 || level.getTile(n, n2, n3 + 1) == 0)) || super.a(level, n, n2, n3, -1, n4));
    }
    
    @Override
    public final void a(final c c, final int n, final int n2, final int n3, final int n4) {
        super.a(c, n, n2, n3, n4);
        super.b(c, n, n2, n3, n4);
    }
    
    @Override
    public final AABB a(final int n, final int n2, final int n3) {
        return null;
    }
    
    @Override
    public final boolean a() {
        return true;
    }
    
    @Override
    public final boolean b() {
        return false;
    }
    
    @Override
    public final com.mojang.minecraft.level.c.a c() {
        return this.U;
    }
    
    @Override
    public void a(final Level level, final int n, final int n2, final int n3, final int n4) {
        if (n4 != 0) {
            final com.mojang.minecraft.level.c.a c = com.mojang.minecraft.level.a.a.a[n4].c();
            if ((this.U == com.mojang.minecraft.level.c.a.b && c == com.mojang.minecraft.level.c.a.c) || (c == com.mojang.minecraft.level.c.a.b && this.U == com.mojang.minecraft.level.c.a.c)) {
                level.setTile(n, n2, n3, com.mojang.minecraft.level.a.a.c.S);
                return;
            }
        }
        level.addToTickNextTick(n, n2, n3, n4);
    }
    
    @Override
    public final int d() {
        if (this.U == com.mojang.minecraft.level.c.a.c) {
            return 5;
        }
        return 0;
    }
}
