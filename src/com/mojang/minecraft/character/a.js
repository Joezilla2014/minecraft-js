
package com.mojang.minecraft.character;

public final class a
{
    private d a;
    private d b;
    private d c;
    private d d;
    private d e;
    private d f;
    
    public a() {
        (this.a = new d(0, 0)).a(-4.0f, -8.0f, -4.0f, 8, 8, 8);
        (this.b = new d(16, 16)).a(-4.0f, 0.0f, -2.0f, 8, 12, 4);
        (this.c = new d(40, 16)).a(-3.0f, -2.0f, -2.0f, 4, 12, 4);
        this.c.a(-5.0f, 2.0f, 0.0f);
        (this.d = new d(40, 16)).a(-1.0f, -2.0f, -2.0f, 4, 12, 4);
        this.d.a(5.0f, 2.0f, 0.0f);
        (this.e = new d(0, 16)).a(-2.0f, 0.0f, -2.0f, 4, 12, 4);
        this.e.a(-2.0f, 12.0f, 0.0f);
        (this.f = new d(0, 16)).a(-2.0f, 0.0f, -2.0f, 4, 12, 4);
        this.f.a(2.0f, 12.0f, 0.0f);
    }
    
    public final void a(final float n, final float n2, final float n3, final float n4, final float n5, final float n6) {
        this.a.b = n4 / 57.29578f;
        this.a.a = n5 / 57.29578f;
        this.c.a = (float)Math.cos(n * 0.6662 + 3.141592653589793) * 2.0f * n2;
        this.c.c = (float)(Math.cos(n * 0.2312) + 1.0) * n2;
        this.d.a = (float)Math.cos(n * 0.6662) * 2.0f * n2;
        this.d.c = (float)(Math.cos(n * 0.2812) - 1.0) * n2;
        this.e.a = (float)Math.cos(n * 0.6662) * 1.4f * n2;
        this.f.a = (float)Math.cos(n * 0.6662 + 3.141592653589793) * 1.4f * n2;
        final d c = this.c;
        c.c += (float)Math.cos(n3 * 0.09) * 0.05f + 0.05f;
        final d d = this.d;
        d.c -= (float)Math.cos(n3 * 0.09) * 0.05f + 0.05f;
        final d c2 = this.c;
        c2.a += (float)Math.sin(n3 * 0.067) * 0.05f;
        final d d2 = this.d;
        d2.a -= (float)Math.sin(n3 * 0.067) * 0.05f;
        this.a.a(n6);
        this.b.a(n6);
        this.c.a(n6);
        this.d.a(n6);
        this.e.a(n6);
        this.f.a(n6);
    }
}
