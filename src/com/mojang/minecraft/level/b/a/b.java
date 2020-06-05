// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.level.b.a;

public final class b extends c
{
    private c a;
    private c b;
    
    public b(final c a, final c b) {
        this.a = a;
        this.b = b;
    }
    
    @Override
    public final double a(final double n, final double n2) {
        return this.a.a(n + this.b.a(n, n2), n2);
    }
}
