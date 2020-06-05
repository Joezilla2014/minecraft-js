
package com.mojang.minecraft.level.c;

public final class a
{
    private static a[] d;
    public static final a a;
    public static final a b;
    public static final a c;
    
    private a(final int n) {
        com.mojang.minecraft.level.c.a.d[n] = this;
    }
    
    static {
        com.mojang.minecraft.level.c.a.d = new a[4];
        a = new a(0);
        b = new a(1);
        c = new a(2);
    }
}
