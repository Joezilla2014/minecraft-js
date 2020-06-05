
package com.mojang.minecraft.level.a;

import java.util.Random;
import com.mojang.minecraft.level.Level;
import com.mojang.minecraft.level.c.a;

public final class e extends k
{
    protected e(final int v, final com.mojang.minecraft.level.c.a a) {
        super(v, a);
        this.W = v - 1;
        this.V = v;
        this.a(false);
    }
    
    @Override
    public final void a(final Level level, final int n, final int n2, final int n3, final Random random) {
    }
    
    @Override
    public final void a(final Level level, final int n, final int n2, final int n3, final int n4) {
        boolean b = false;
        if (level.getTile(n - 1, n2, n3) == 0) {
            b = true;
        }
        if (level.getTile(n + 1, n2, n3) == 0) {
            b = true;
        }
        if (level.getTile(n, n2, n3 - 1) == 0) {
            b = true;
        }
        if (level.getTile(n, n2, n3 + 1) == 0) {
            b = true;
        }
        if (level.getTile(n, n2 - 1, n3) == 0) {
            b = true;
        }
        if (n4 != 0) {
            final com.mojang.minecraft.level.c.a c = com.mojang.minecraft.level.a.a.a[n4].c();
            if ((this.U == com.mojang.minecraft.level.c.a.b && c == com.mojang.minecraft.level.c.a.c) || (c == com.mojang.minecraft.level.c.a.b && this.U == com.mojang.minecraft.level.c.a.c)) {
                level.setTile(n, n2, n3, com.mojang.minecraft.level.a.a.c.S);
                return;
            }
        }
        if (b) {
            level.setTileNoUpdate(n, n2, n3, this.W);
            level.addToTickNextTick(n, n2, n3, this.W);
        }
    }
}
