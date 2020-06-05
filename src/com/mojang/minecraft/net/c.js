
package com.mojang.minecraft.net;

import java.io.IOException;
import com.mojang.minecraft.b.f;
import com.mojang.minecraft.b.j;
import com.mojang.a.a;
import com.mojang.minecraft.d;

final class c extends Thread
{
    private /* synthetic */ String a;
    private /* synthetic */ int b;
    private /* synthetic */ String c;
    private /* synthetic */ String d;
    private /* synthetic */ d e;
    private /* synthetic */ com.mojang.minecraft.net.d f;
    
    c(final com.mojang.minecraft.net.d f, final String a, final int b, final String c, final String d, final d e) {
        this.f = f;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
    }
    
    @Override
    public final void run() {
        try {
            this.f.b = new a(this.a, this.b);
            this.f.b.e = this.f;
            this.f.b.a(com.mojang.minecraft.net.a.b, 6, this.c, this.d, 0);
            this.f.d = true;
        }
        catch (IOException ex) {
            this.e.t = false;
            this.e.o = null;
            this.e.a(new j("Failed to connect", "You failed to connect to the server. It's probably down!"));
        }
    }
}
