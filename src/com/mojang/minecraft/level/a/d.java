// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.level.a;

import com.mojang.minecraft.level.Level;

public final class d extends a
{
    public d(final int n, final int n2) {
        super(n, n2);
    }
    
    @Override
    public final void b(final Level level, final int n, final int n2, final int n3) {
        e(level, n, n2, n3);
    }
    
    @Override
    public final void a(final Level level, final int n, final int n2, final int n3, final int n4) {
        e(level, n, n2, n3);
    }
    
    private static void e(final Level level, final int n, final int n2, final int n3) {
        int n4;
        for (n4 = n2; level.getTile(n, n4 - 1, n3) == 0 && n4 > 0; --n4) {}
        if (n4 != n2) {
            level.swap(n, n2, n3, n, n4, n3);
        }
    }
}
