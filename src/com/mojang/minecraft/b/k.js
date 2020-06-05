
package com.mojang.minecraft.b;

public final class k extends i
{
    public k(final f f) {
        super(f);
        this.f = "Save level";
    }
    
    @Override
    protected final void a(final String[] array) {
        for (int i = 0; i < 5; ++i) {
            ((g)this.d.get(i)).e = array[i];
            ((g)this.d.get(i)).h = true;
        }
    }
    
    @Override
    protected final void a(final int n) {
        this.a.a(new b(this, this.d.get(n).e, n));
    }
}
