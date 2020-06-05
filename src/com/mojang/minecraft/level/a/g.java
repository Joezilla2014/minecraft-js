// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.level.a;

import java.util.Random;
import com.mojang.minecraft.level.Level;

public final class g extends a
{
    protected g(final int n) {
        super(2);
        this.R = 3;
        this.a(true);
    }
    
    @Override
    protected final int b(final int n) {
        if (n == 1) {
            return 0;
        }
        if (n == 0) {
            return 2;
        }
        return 3;
    }
    
    @Override
    public final void a(final Level level, final int n, final int n2, final int n3, final Random random) {
        if (random.nextInt(4) != 0) {
            return;
        }
        if (!level.isLit(n, n2 + 1, n3)) {
            level.setTile(n, n2, n3, com.mojang.minecraft.level.a.a.e.S);
            return;
        }
        for (int i = 0; i < 4; ++i) {
            final int n4 = n + random.nextInt(3) - 1;
            final int n5 = n2 + random.nextInt(5) - 3;
            final int n6 = n3 + random.nextInt(3) - 1;
            if (level.getTile(n4, n5, n6) == com.mojang.minecraft.level.a.a.e.S && level.isLit(n4, n5 + 1, n6)) {
                level.setTile(n4, n5, n6, com.mojang.minecraft.level.a.a.d.S);
            }
        }
    }
}
