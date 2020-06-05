
package com.mojang.minecraft.particle;

import com.mojang.minecraft.a.c;
import org.lwjgl.opengl.GL11;
import com.mojang.minecraft.player.Player;
import java.util.ArrayList;
import com.mojang.minecraft.level.Level;
import java.util.List;

public final class a
{
    public List a;
    private com.mojang.minecraft.a.a b;
    
    public a(final Level level, final com.mojang.minecraft.a.a b) {
        this.a = new ArrayList();
        this.b = b;
    }
    
    public final void a(final Player player, final float n) {
        if (this.a.size() == 0) {
            return;
        }
        GL11.glEnable(3553);
        GL11.glBindTexture(3553, this.b.a("/terrain.png"));
        final float n2 = -(float)Math.cos(player.yRot * 3.141592653589793 / 180.0);
        final float n4;
        final float n3 = -(n4 = -(float)Math.sin(player.yRot * 3.141592653589793 / 180.0)) * (float)Math.sin(player.xRot * 3.141592653589793 / 180.0);
        final float n5 = n2 * (float)Math.sin(player.xRot * 3.141592653589793 / 180.0);
        final float n6 = (float)Math.cos(player.xRot * 3.141592653589793 / 180.0);
        final c a;
        (a = c.a).b();
        for (int i = 0; i < this.a.size(); ++i) {
            final Particle particle = this.a.get(i);
            final float n7 = 0.8f * particle.getBrightness();
            a.a(n7, n7, n7);
            particle.render$12562f50(a, n, n2, n6, n4, n3, n5);
        }
        a.a();
        GL11.glDisable(3553);
    }
}
