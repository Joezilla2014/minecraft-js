// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.character;

public final class c
{
    public float a;
    public float b;
    public float c;
    
    public c(final float a, final float b, final float c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    
    public final c a(final c c) {
        return new c(this.a - c.a, this.b - c.b, this.c - c.c);
    }
    
    public final c a() {
        final float n = (float)Math.sqrt(this.a * this.a + this.b * this.b + this.c * this.c);
        return new c(this.a / n, this.b / n, this.c / n);
    }
}
