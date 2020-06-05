
package com.mojang.minecraft.net;

public final class b
{
    public float a;
    public float b;
    public float c;
    public float d;
    public float e;
    public boolean f;
    public boolean g;
    
    public b(final float a, final float b, final float c, final float d, final float e) {
        this.f = false;
        this.g = false;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = true;
        this.g = true;
    }
    
    public b(final float a, final float b, final float c) {
        this.f = false;
        this.g = false;
        this.a = a;
        this.b = b;
        this.c = c;
        this.g = true;
        this.f = false;
    }
    
    public b(final float d, final float e) {
        this.f = false;
        this.g = false;
        this.d = d;
        this.e = e;
        this.f = true;
        this.g = false;
    }
}
