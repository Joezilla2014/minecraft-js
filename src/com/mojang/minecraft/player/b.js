
package com.mojang.minecraft.player;

public final class b extends a
{
    private boolean[] e;
    
    public b() {
        this.e = new boolean[10];
    }
    
    @Override
    public final void a(final int n, final boolean b) {
        int n2 = -1;
        if (n == 200 || n == 17) {
            n2 = 0;
        }
        if (n == 208 || n == 31) {
            n2 = 1;
        }
        if (n == 203 || n == 30) {
            n2 = 2;
        }
        if (n == 205 || n == 32) {
            n2 = 3;
        }
        if (n == 57 || n == 219) {
            n2 = 4;
        }
        if (n2 >= 0) {
            this.e[n2] = b;
        }
    }
    
    @Override
    public final void b() {
        for (int i = 0; i < 10; ++i) {
            this.e[i] = false;
        }
    }
    
    @Override
    public final void a() {
        this.a = 0.0f;
        this.b = 0.0f;
        if (this.e[0]) {
            --this.b;
        }
        if (this.e[1]) {
            ++this.b;
        }
        if (this.e[2]) {
            --this.a;
        }
        if (this.e[3]) {
            ++this.a;
        }
        this.d = this.e[4];
    }
}
