
package com.mojang.minecraft.particle;

import com.mojang.minecraft.a.c;
import com.mojang.minecraft.level.a.a;
import com.mojang.minecraft.level.Level;
import com.mojang.minecraft.Entity;

public class Particle extends Entity
{
    private float xd;
    private float yd;
    private float zd;
    public int tex;
    private float uo;
    private float vo;
    private int age;
    private int lifetime;
    private float size;
    private float gravity;
    
    public Particle(final Level level, float n, final float n2, final float n3, final float n4, final float n5, final float n6, final a a) {
        super(level);
        this.age = 0;
        this.lifetime = 0;
        this.tex = a.R;
        this.gravity = a.T;
        this.setSize(0.2f, 0.2f);
        this.heightOffset = this.bbHeight / 2.0f;
        this.setPos(n, n2, n3);
        this.xd = n4 + (float)(Math.random() * 2.0 - 1.0) * 0.4f;
        this.yd = n5 + (float)(Math.random() * 2.0 - 1.0) * 0.4f;
        this.zd = n6 + (float)(Math.random() * 2.0 - 1.0) * 0.4f;
        final float n7 = (float)(Math.random() + Math.random() + 1.0) * 0.15f;
        n = (float)Math.sqrt(this.xd * this.xd + this.yd * this.yd + this.zd * this.zd);
        this.xd = this.xd / n * n7 * 0.4f;
        this.yd = this.yd / n * n7 * 0.4f + 0.1f;
        this.zd = this.zd / n * n7 * 0.4f;
        this.uo = (float)Math.random() * 3.0f;
        this.vo = (float)Math.random() * 3.0f;
        this.size = (float)(Math.random() * 0.5 + 0.5);
        this.lifetime = (int)(4.0 / (Math.random() * 0.9 + 0.1));
        this.age = 0;
    }
    
    @Override
    public void tick() {
        this.xo = this.x;
        this.yo = this.y;
        this.zo = this.z;
        if (this.age++ >= this.lifetime) {
            this.remove();
        }
        this.yd -= (float)(0.04 * this.gravity);
        this.move(this.xd, this.yd, this.zd);
        this.xd *= 0.98f;
        this.yd *= 0.98f;
        this.zd *= 0.98f;
        if (this.onGround) {
            this.xd *= 0.7f;
            this.zd *= 0.7f;
        }
    }
    
    public void render$12562f50(final c c, final float n, final float n2, final float n3, final float n4, final float n5, final float n6) {
        final float n8;
        final float n7 = (n8 = (this.tex % 16 + this.uo / 4.0f) / 16.0f) + 0.015609375f;
        final float n10;
        final float n9 = (n10 = (this.tex / 16 + this.vo / 4.0f) / 16.0f) + 0.015609375f;
        final float n11 = 0.1f * this.size;
        final float n12 = this.xo + (this.x - this.xo) * n;
        final float n13 = this.yo + (this.y - this.yo) * n;
        final float n14 = this.zo + (this.z - this.zo) * n;
        c.a(n12 - n2 * n11 - n5 * n11, n13 - n3 * n11, n14 - n4 * n11 - n6 * n11, n8, n9);
        c.a(n12 - n2 * n11 + n5 * n11, n13 + n3 * n11, n14 - n4 * n11 + n6 * n11, n8, n10);
        c.a(n12 + n2 * n11 + n5 * n11, n13 + n3 * n11, n14 + n4 * n11 + n6 * n11, n7, n10);
        c.a(n12 + n2 * n11 - n5 * n11, n13 - n3 * n11, n14 + n4 * n11 - n6 * n11, n7, n9);
    }
}
