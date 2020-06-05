// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.character;

public final class e
{
    public c a;
    public float b;
    public float c;
    
    public e(final float n, final float n2, final float n3, final float n4, final float n5) {
        this(new c(n, n2, n3), n4, n5);
    }
    
    public final e a(final float n, final float n2) {
        return new e(this, n, n2);
    }
    
    private e(final e e, final float b, final float c) {
        this.a = e.a;
        this.b = b;
        this.c = c;
    }
    
    private e(final c a, final float b, final float c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
}
