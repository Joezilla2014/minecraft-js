// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.b;

public final class h extends f
{
    private f f;
    
    public h(final f f) {
        this.f = f;
    }
    
    @Override
    public final void a() {
        this.d.clear();
        this.d.add(new g(0, this.b / 2 - 100, this.c / 3, 200, 20, "Small"));
        this.d.add(new g(1, this.b / 2 - 100, this.c / 3 + 32, 200, 20, "Normal"));
        this.d.add(new g(2, this.b / 2 - 100, this.c / 3 + 64, 200, 20, "Huge"));
        this.d.add(new g(3, this.b / 2 - 100, this.c / 3 + 96, 200, 20, "Cancel"));
    }
    
    @Override
    protected final void a(final g g) {
        if (g.f == 3) {
            this.a.a(this.f);
            return;
        }
        this.a.b(g.f);
        this.a.a((f)null);
        this.a.b();
    }
    
    @Override
    public final void a(final int n, final int n2) {
        com.mojang.minecraft.b.f.a(0, 0, this.b, this.c, 1610941696, -1607454624);
        this.a("Generate new level", this.b / 2, 40, 16777215);
        super.a(n, n2);
    }
}
