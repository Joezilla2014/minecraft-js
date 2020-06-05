// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.net;

import com.mojang.minecraft.b.f;
import com.mojang.minecraft.b.j;
import java.util.HashMap;
import com.mojang.a.a;
import java.io.ByteArrayOutputStream;

public final class d
{
    public ByteArrayOutputStream a;
    public a b;
    public com.mojang.minecraft.d c;
    public boolean d;
    public boolean e;
    public HashMap f;
    
    public d(final com.mojang.minecraft.d c, final String s, final int n, final String s2, final String s3) {
        this.d = false;
        this.e = false;
        this.f = new HashMap();
        c.t = true;
        this.c = c;
        new c(this, s, n, s2, s3, c).start();
    }
    
    public final void a(final int i, final int j, final int k, final int l, final int m) {
        this.b.a(com.mojang.minecraft.net.a.f, i, j, k, l, m);
    }
    
    public final void a(final Exception ex) {
        this.b.a();
        this.c.a(new j("Disconnected!", ex.getMessage()));
        ex.printStackTrace();
    }
    
    public final boolean a() {
        return this.b != null && this.b.a;
    }
}
