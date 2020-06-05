// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.net;

public final class a
{
    public static final a[] a;
    public static final a b;
    public static final a c;
    public static final a d;
    public static final a e;
    public static final a f;
    public static final a g;
    public static final a h;
    public static final a i;
    public static final a j;
    public static final a k;
    public static final a l;
    public static final a m;
    public static final a n;
    public static final a o;
    public final int p;
    private static int s;
    public final byte q;
    public Class[] r;
    
    private a(final Class... array) {
        this.q = (byte)(com.mojang.minecraft.net.a.s++);
        com.mojang.minecraft.net.a.a[this.q] = this;
        this.r = new Class[array.length];
        int p = 0;
        for (int i = 0; i < array.length; ++i) {
            final Class clazz = array[i];
            if ((this.r[i] = clazz) == Long.TYPE) {
                p += 8;
            }
            else if (clazz == Integer.TYPE) {
                p += 4;
            }
            else if (clazz == Short.TYPE) {
                p += 2;
            }
            else if (clazz == Byte.TYPE) {
                ++p;
            }
            else if (clazz == Float.TYPE) {
                p += 4;
            }
            else if (clazz == Double.TYPE) {
                p += 8;
            }
            else if (clazz == byte[].class) {
                p += 1024;
            }
            else if (clazz == String.class) {
                p += 64;
            }
        }
        this.p = p;
    }
    
    static {
        a = new a[256];
        b = new a(new Class[] { Byte.TYPE, String.class, String.class, Byte.TYPE });
        new a(new Class[0]);
        c = new a(new Class[0]);
        d = new a(new Class[] { Short.TYPE, byte[].class, Byte.TYPE });
        e = new a(new Class[] { Short.TYPE, Short.TYPE, Short.TYPE });
        f = new a(new Class[] { Short.TYPE, Short.TYPE, Short.TYPE, Byte.TYPE, Byte.TYPE });
        g = new a(new Class[] { Short.TYPE, Short.TYPE, Short.TYPE, Byte.TYPE });
        h = new a(new Class[] { Byte.TYPE, String.class, Short.TYPE, Short.TYPE, Short.TYPE, Byte.TYPE, Byte.TYPE });
        i = new a(new Class[] { Byte.TYPE, Short.TYPE, Short.TYPE, Short.TYPE, Byte.TYPE, Byte.TYPE });
        j = new a(new Class[] { Byte.TYPE, Byte.TYPE, Byte.TYPE, Byte.TYPE, Byte.TYPE, Byte.TYPE });
        k = new a(new Class[] { Byte.TYPE, Byte.TYPE, Byte.TYPE, Byte.TYPE });
        l = new a(new Class[] { Byte.TYPE, Byte.TYPE, Byte.TYPE });
        m = new a(new Class[] { Byte.TYPE });
        n = new a(new Class[] { Byte.TYPE, String.class });
        o = new a(new Class[] { String.class });
        com.mojang.minecraft.net.a.s = 0;
    }
}
