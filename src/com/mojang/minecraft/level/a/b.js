
package com.mojang.minecraft.level.a;

import com.mojang.minecraft.level.Level;

public final class b extends a
{
    private boolean U;
    
    protected b(final int n, final int n2, final boolean b) {
        super(18, 22);
        this.U = true;
    }
    
    @Override
    public final boolean b() {
        return false;
    }
    
    @Override
    protected final boolean a(final Level level, final int n, final int n2, final int n3, final int n4, final int n5) {
        final int tile = level.getTile(n, n2, n3);
        return (this.U || tile != this.S) && super.a(level, n, n2, n3, n4, n5);
    }
    
    @Override
    public final boolean a() {
        return false;
    }
}
