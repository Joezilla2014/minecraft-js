
package com.mojang.minecraft.b;

import com.mojang.minecraft.d;
import org.lwjgl.input.Keyboard;

public final class b extends f
{
    private f f;
    private String g;
    private int h;
    private String i;
    private int j;
    
    public b(final f f, final String i, final int h) {
        this.g = "Enter level name:";
        this.j = 0;
        this.f = f;
        this.h = h;
        this.i = i;
        if (this.i.equals("-")) {
            this.i = "";
        }
    }
    
    @Override
    public final void a() {
        this.d.clear();
        Keyboard.enableRepeatEvents(true);
        this.d.add(new g(0, this.b / 2 - 100, this.c / 4 + 120, 200, 20, "Save"));
        this.d.add(new g(1, this.b / 2 - 100, this.c / 4 + 144, 200, 20, "Cancel"));
        this.d.get(0).g = (this.i.trim().length() > 1);
    }
    
    @Override
    public final void b() {
        Keyboard.enableRepeatEvents(false);
    }
    
    @Override
    public final void c() {
        ++this.j;
    }
    
    @Override
    protected final void a(final g g) {
        if (!g.g) {
            return;
        }
        if (g.f == 0 && this.i.trim().length() > 1) {
            final d a = this.a;
            final int h = this.h;
            final String trim = this.i.trim();
            final int n = h;
            final d d = a;
            a.l.a(d.c, d.f, d.e.b, d.e.c, trim, n);
            this.a.a((f)null);
            this.a.b();
        }
        if (g.f == 1) {
            this.a.a(this.f);
        }
    }
    
    @Override
    protected final void a(final char c, final int n) {
        if (n == 14 && this.i.length() > 0) {
            this.i = this.i.substring(0, this.i.length() - 1);
        }
        if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_'*!\"#%/()=+?[]{}<>".indexOf(c) >= 0 && this.i.length() < 64) {
            this.i += c;
        }
        this.d.get(0).g = (this.i.trim().length() > 1);
    }
    
    @Override
    public final void a(final int n, final int n2) {
        com.mojang.minecraft.b.f.a(0, 0, this.b, this.c, 1610941696, -1607454624);
        this.a(this.g, this.b / 2, 40, 16777215);
        final int n3 = this.b / 2 - 100;
        final int n4 = this.c / 2 - 10;
        com.mojang.minecraft.b.f.a(n3 - 1, n4 - 1, n3 + 200 + 1, n4 + 20 + 1, -6250336);
        com.mojang.minecraft.b.f.a(n3, n4, n3 + 200, n4 + 20, -16777216);
        this.b(this.i + ((this.j / 6 % 2 == 0) ? "_" : ""), n3 + 4, n4 + 6, 14737632);
        super.a(n, n2);
    }
}
