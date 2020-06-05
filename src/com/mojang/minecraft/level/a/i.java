// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.level.a;

import com.mojang.minecraft.level.Level;

public final class i extends a
{
    protected i(final int n) {
        super(19);
        this.R = 48;
    }
    
    @Override
    public final void c(final Level level, final int n, final int n2, final int n3) {
        for (int i = n - 2; i <= n + 2; ++i) {
            for (int j = n2 - 2; j <= n2 + 2; ++j) {
                for (int k = n3 - 2; k <= n3 + 2; ++k) {
                    if (level.isWater(i, j, k)) {
                        level.setTileNoNeighborChange(i, j, k, 0);
                    }
                }
            }
        }
    }
    
    @Override
    public final void d(final Level level, final int n, final int n2, final int n3) {
        for (int i = n - 2; i <= n + 2; ++i) {
            for (int j = n2 - 2; j <= n2 + 2; ++j) {
                for (int k = n3 - 2; k <= n3 + 2; ++k) {
                    level.updateNeighborsAt(i, j, k, level.getTile(i, j, k));
                }
            }
        }
    }
}
