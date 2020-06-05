
package com.mojang.minecraft.player;

import com.mojang.minecraft.level.Level;
import com.mojang.minecraft.Entity;

public class Player extends Entity
{
    private a input;
    public c inventory;
    public byte userType;
    
    public Player(final Level level, final a input) {
        super(level);
        this.inventory = new c();
        this.userType = 0;
        this.heightOffset = 1.62f;
        this.input = input;
    }
    
    @Override
    public void tick() {
        super.tick();
        final boolean inWater = this.isInWater();
        final boolean inLava = this.isInLava();
        this.input.a();
        if (this.input.d) {
            if (inWater) {
                this.yd += 0.04f;
            }
            else if (inLava) {
                this.yd += 0.04f;
            }
            else if (this.onGround && !this.input.c) {
                this.yd = 0.42f;
                this.input.c = true;
            }
        }
        else {
            this.input.c = false;
        }
        if (inWater) {
            final float y = this.y;
            this.moveRelative(this.input.a, this.input.b, 0.02f);
            this.move(this.xd, this.yd, this.zd);
            this.xd *= 0.8f;
            this.yd *= 0.8f;
            this.zd *= 0.8f;
            this.yd -= (float)0.02;
            if (this.horizontalCollision && this.isFree(this.xd, this.yd + 0.6f - this.y + y, this.zd)) {
                this.yd = 0.3f;
            }
            return;
        }
        if (inLava) {
            final float y2 = this.y;
            this.moveRelative(this.input.a, this.input.b, 0.02f);
            this.move(this.xd, this.yd, this.zd);
            this.xd *= 0.5f;
            this.yd *= 0.5f;
            this.zd *= 0.5f;
            this.yd -= (float)0.02;
            if (this.horizontalCollision && this.isFree(this.xd, this.yd + 0.6f - this.y + y2, this.zd)) {
                this.yd = 0.3f;
            }
            return;
        }
        this.moveRelative(this.input.a, this.input.b, this.onGround ? 0.1f : 0.02f);
        this.move(this.xd, this.yd, this.zd);
        this.xd *= 0.91f;
        this.yd *= 0.98f;
        this.zd *= 0.91f;
        this.yd -= (float)0.08;
        if (this.onGround) {
            final float n = 0.6f;
            this.xd *= n;
            this.zd *= n;
        }
    }
    
    public void releaseAllKeys() {
        this.input.b();
    }
    
    public void setKey(final int n, final boolean b) {
        this.input.a(n, b);
    }
}
