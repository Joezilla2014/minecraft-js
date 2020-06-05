
package com.mojang.minecraft.character;

import org.lwjgl.opengl.GL11;
import com.mojang.minecraft.level.Level;
import com.mojang.minecraft.Entity;

public class Zombie extends Entity
{
    public static final long serialVersionUID = 77479605454997290L;
    private static a a;
    public float rot;
    public float timeOffs;
    public float speed;
    public float rotA;
    
    public Zombie(final Level level, final float n, final float n2, final float n3) {
        super(level);
        this.rotA = (float)(Math.random() + 1.0) * 0.01f;
        this.setPos(n, n2, n3);
        this.timeOffs = (float)Math.random() * 1239813.0f;
        this.rot = (float)(Math.random() * 3.141592653589793 * 2.0);
        this.speed = 1.0f;
    }
    
    @Override
    public void tick() {
        this.xo = this.x;
        this.yo = this.y;
        this.zo = this.z;
        if (this.y < -100.0f) {
            this.remove();
        }
        this.rot += this.rotA;
        this.rotA *= (float)0.99;
        this.rotA += (float)((Math.random() - Math.random()) * Math.random() * Math.random() * 0.07999999821186066);
        final float n = (float)Math.sin(this.rot);
        final float n2 = (float)Math.cos(this.rot);
        if (this.onGround && Math.random() < 0.08) {
            this.yd = 0.5f;
        }
        this.moveRelative(n, n2, this.onGround ? 0.1f : 0.02f);
        this.yd -= (float)0.08;
        this.move(this.xd, this.yd, this.zd);
        this.xd *= 0.91f;
        this.yd *= 0.98f;
        this.zd *= 0.91f;
        if (this.onGround) {
            this.xd *= 0.7f;
            this.zd *= 0.7f;
        }
    }
    
    @Override
    public void render$2a8c5a(final com.mojang.minecraft.a.a a, float n) {
        GL11.glEnable(3553);
        GL11.glBindTexture(3553, a.a("/char.png"));
        GL11.glPushMatrix();
        final double n2 = System.nanoTime() / 1.0E9 * 10.0 * this.speed + this.timeOffs;
        final float brightness;
        GL11.glColor3f(brightness = this.getBrightness(), brightness, brightness);
        final float n3 = 0.058333334f;
        final float n4 = (float)(-Math.abs(Math.sin(n2 * 0.6662)) * 5.0 - 23.0);
        GL11.glTranslatef(this.xo + (this.x - this.xo) * n, this.yo + (this.y - this.yo) * n, this.zo + (this.z - this.zo) * n);
        GL11.glScalef(1.0f, -1.0f, 1.0f);
        GL11.glTranslatef(0.0f, n4 * n3, 0.0f);
        n = 57.29578f;
        GL11.glRotatef(this.rot * n + 180.0f, 0.0f, 1.0f, 0.0f);
        GL11.glScalef(-1.0f, 1.0f, 1.0f);
        Zombie.a.a((float)n2, 1.0f, 0.0f, 0.0f, 0.0f, n3);
        GL11.glPopMatrix();
        GL11.glDisable(3553);
    }
    
    static {
        Zombie.a = new a();
    }
}
