
package com.mojang.minecraft.b;

import com.mojang.minecraft.net.d;
import com.mojang.minecraft.net.a;
import org.lwjgl.input.Keyboard;

public final class c extends f
{
    private String f;
    private int g;
    
    public c() {
        this.f = "";
        this.g = 0;
    }
    
    @Override
    public final void a() {
        Keyboard.enableRepeatEvents(true);
    }
    
    @Override
    public final void b() {
        Keyboard.enableRepeatEvents(false);
    }
    
    @Override
    public final void c() {
        ++this.g;
    }
    
    @Override
    protected final void a(final char c, final int n) {
        if (n == 1) {
            this.a.a((f)null);
            return;
        }
        if (n == 28) {
            final d o = this.a.o;
            final String trim = this.f.trim();
            final d d = o;
            final String trim2;
            if ((trim2 = trim.trim()).length() > 0) {
                d.b.a(com.mojang.minecraft.net.a.n, -1, trim2);
            }
            this.a.a((f)null);
            return;
        }
        if (n == 14 && this.f.length() > 0) {
            this.f = this.f.substring(0, this.f.length() - 1);
        }
        if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_'*!\\\"#%/()=+?[]{}<>@|$;".indexOf(c) >= 0 && this.f.length() < 64 - (this.a.e.b.length() + 2)) {
            this.f += c;
        }
    }
    
    @Override
    public final void a(final int n, final int n2) {
        com.mojang.minecraft.b.f.a(2, this.c - 14, this.b - 2, this.c - 2, Integer.MIN_VALUE);
        this.b("> " + this.f + ((this.g / 6 % 2 == 0) ? "_" : ""), 4, this.c - 12, 14737632);
    }
}
