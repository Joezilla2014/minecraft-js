// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.b;

public final class e extends f
{
    @Override
    public final void a() {
        this.d.clear();
        this.d.add(new g(0, this.b / 2 - 100, this.c / 3, 200, 20, "Generate new level..."));
        this.d.add(new g(1, this.b / 2 - 100, this.c / 3 + 32, 200, 20, "Save level.."));
        this.d.add(new g(2, this.b / 2 - 100, this.c / 3 + 64, 200, 20, "Load level.."));
        this.d.add(new g(3, this.b / 2 - 100, this.c / 3 + 96, 200, 20, "Back to game"));
        if (this.a.e == null) {
            this.d.get(1).g = false;
            this.d.get(2).g = false;
        }
        if (this.a.o != null) {
            this.d.get(0).g = false;
            this.d.get(1).g = false;
            this.d.get(2).g = false;
        }
    }
    
    @Override
    protected final void a(final g g) {
        if (g.f == 0) {
            this.a.a(new h(this));
        }
        if (this.a.e != null) {
            if (g.f == 1) {
                this.a.a(new k(this));
            }
            if (g.f == 2) {
                this.a.a(new i(this));
            }
        }
        if (g.f == 3) {
            this.a.a((f)null);
            this.a.b();
        }
    }
    
    @Override
    public final void a(final int n, final int n2) {
        f.a(0, 0, this.b, this.c, 1610941696, -1607454624);
        this.a("Game menu", this.b / 2, 40, 16777215);
        super.a(n, n2);
    }
}
