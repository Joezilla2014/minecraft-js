
package com.mojang.minecraft.player;

import com.mojang.minecraft.level.a.a;

public final class c
{
    public int[] a;
    public int b;
    
    public c() {
        this.a = new int[9];
        this.b = 0;
        for (int i = 0; i < 9; ++i) {
            this.a[i] = ((a)com.mojang.minecraft.a.a.get(i)).S;
        }
    }
    
    public final int a() {
        return this.a[this.b];
    }
    
    public int a(final int n) {
        for (int i = 0; i < this.a.length; ++i) {
            if (n == this.a[i]) {
                return i;
            }
        }
        return -1;
    }
    
    public final void a(final a a) {
        if (a != null) {
            final int a2;
            if ((a2 = this.a(a.S)) >= 0) {
                this.a[a2] = this.a[this.b];
            }
            this.a[this.b] = a.S;
        }
    }
}
