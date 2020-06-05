
package com.mojang.minecraft.level.a;

import com.mojang.minecraft.phys.AABB;
import com.mojang.minecraft.a.c;
import java.util.Random;
import com.mojang.minecraft.level.Level;

public final class h extends a
{
    protected h(final int n, final int r) {
        super(n);
        this.R = r;
        this.a(true);
    }
    
    @Override
    public final void a(final Level level, final int n, final int n2, final int n3, final Random random) {
        final int tile = level.getTile(n, n2 - 1, n3);
        if (!level.isLit(n, n2, n3) || (tile != com.mojang.minecraft.level.a.a.e.S && tile != com.mojang.minecraft.level.a.a.d.S)) {
            level.setTile(n, n2, n3, 0);
        }
    }
    
    @Override
    public final boolean a(final c c, final Level level, final int n, final int n2, final int n3, final int n4) {
        if (level.isLit(n2, n3, n4) ^ n != 1) {
            return false;
        }
        final int b;
        final float n6;
        final float n5 = (n6 = (b = this.b(15)) % 16 / 16.0f) + 0.0624375f;
        final float n8;
        final float n7 = (n8 = b / 16 / 16.0f) + 0.0624375f;
        c.a(255, 255, 255);
        for (int i = 0; i < 2; ++i) {
            final float n9 = (float)(Math.sin(i * 3.141592653589793 / 2 + 0.7853981633974483) * 0.5);
            final float n10 = (float)(Math.cos(i * 3.141592653589793 / 2 + 0.7853981633974483) * 0.5);
            final float n11 = n2 + 0.5f - n9;
            final float n12 = n2 + 0.5f + n9;
            final float n13 = (float)n3;
            final float n14 = n3 + 1.0f;
            final float n15 = n4 + 0.5f - n10;
            final float n16 = n4 + 0.5f + n10;
            c.a(n11, n14, n15, n5, n8);
            c.a(n12, n14, n16, n6, n8);
            c.a(n12, n13, n16, n6, n7);
            c.a(n11, n13, n15, n5, n7);
            c.a(n12, n14, n16, n5, n8);
            c.a(n11, n14, n15, n6, n8);
            c.a(n11, n13, n15, n6, n7);
            c.a(n12, n13, n16, n5, n7);
        }
        return true;
    }
    
    @Override
    public final AABB a(final int n, final int n2, final int n3) {
        return null;
    }
    
    @Override
    public final boolean a() {
        return false;
    }
    
    @Override
    public final boolean b() {
        return false;
    }
}
