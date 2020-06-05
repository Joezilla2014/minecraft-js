
package com.mojang.minecraft.net;

import com.mojang.minecraft.b.l;
import org.lwjgl.opengl.GL11;
import java.util.LinkedList;
import java.awt.image.BufferedImage;
import com.mojang.minecraft.d;
import java.util.List;
import com.mojang.minecraft.character.a;
import com.mojang.minecraft.Entity;

public class NetworkPlayer extends Entity
{
    public static final long serialVersionUID = 77479605454997290L;
    private a zombieModel;
    private float animStep;
    private float animStepO;
    private List moveQueue;
    private d minecraft;
    private int xp;
    private int yp;
    private int zp;
    private float yBodyRot;
    private float yBodyRotO;
    private float oRun;
    private float run;
    private transient int a;
    public transient BufferedImage newTexture;
    public String name;
    int tickCount;
    private com.mojang.minecraft.a.a textures$7a7c7041;
    
    public NetworkPlayer(final d minecraft, final int n, final String name, final int xp, final int yp, final int zp, final float yRot, final float xRot) {
        super(minecraft.c);
        this.moveQueue = new LinkedList();
        this.yBodyRot = 0.0f;
        this.yBodyRotO = 0.0f;
        this.a = -1;
        this.newTexture = null;
        this.tickCount = 0;
        this.minecraft = minecraft;
        this.zombieModel = minecraft.u;
        this.name = name;
        this.xp = xp;
        this.yp = yp;
        this.zp = zp;
        this.setPos(xp / 32.0f, yp / 32.0f, zp / 32.0f);
        this.xRot = xRot;
        this.yRot = yRot;
        this.heightOffset = 1.62f;
        new e(this).start();
    }
    
    @Override
    public void tick() {
        super.tick();
        this.animStepO = this.animStep;
        this.yBodyRotO = this.yBodyRot;
        this.yRotO = this.yRot;
        this.xRotO = this.xRot;
        ++this.tickCount;
        int n = 5;
        do {
            if (this.moveQueue.size() > 0) {
                this.setPos(this.moveQueue.remove(0));
            }
        } while (n-- > 0 && this.moveQueue.size() > 10);
        final float n2 = this.x - this.xo;
        final float n3 = this.z - this.zo;
        final float n4 = (float)Math.sqrt(n2 * n2 + n3 * n3);
        float yBodyRot = this.yBodyRot;
        float n5 = 0.0f;
        this.oRun = this.run;
        float n6 = 0.0f;
        if (n4 != 0.0f) {
            n6 = 1.0f;
            n5 = n4 * 3.0f;
            yBodyRot = -((float)Math.atan2(n3, n2) * 180.0f / 3.1415927f + 90.0f);
        }
        this.run += (n6 - this.run) * 0.3f;
        float n7;
        for (n7 = yBodyRot - this.yBodyRot; n7 < -180.0f; n7 += 360.0f) {}
        while (n7 >= 180.0f) {
            n7 -= 360.0f;
        }
        this.yBodyRot += n7 * 0.1f;
        float n8;
        for (n8 = this.yRot - this.yBodyRot; n8 < -180.0f; n8 += 360.0f) {}
        while (n8 >= 180.0f) {
            n8 -= 360.0f;
        }
        final boolean b = n8 < -90.0f || n8 >= 90.0f;
        if (n8 < -75.0f) {
            n8 = -75.0f;
        }
        if (n8 >= 75.0f) {
            n8 = 75.0f;
        }
        this.yBodyRot = this.yRot - n8;
        this.yBodyRot += n8 * 0.1f;
        if (b) {
            n5 = -n5;
        }
        while (this.yRot - this.yRotO < -180.0f) {
            this.yRotO -= 360.0f;
        }
        while (this.yRot - this.yRotO >= 180.0f) {
            this.yRotO += 360.0f;
        }
        while (this.yBodyRot - this.yBodyRotO < -180.0f) {
            this.yBodyRotO -= 360.0f;
        }
        while (this.yBodyRot - this.yBodyRotO >= 180.0f) {
            this.yBodyRotO += 360.0f;
        }
        while (this.xRot - this.xRotO < -180.0f) {
            this.xRotO -= 360.0f;
        }
        while (this.xRot - this.xRotO >= 180.0f) {
            this.xRotO += 360.0f;
        }
        this.animStep += n5;
    }
    
    @Override
    public void render$2a8c5a(final com.mojang.minecraft.a.a textures$7a7c7041, float n) {
        this.textures$7a7c7041 = textures$7a7c7041;
        final float n2 = this.oRun + (this.run - this.oRun) * n;
        GL11.glEnable(3553);
        if (this.newTexture != null) {
            this.a = textures$7a7c7041.a(this.newTexture);
            this.newTexture = null;
        }
        if (this.a < 0) {
            GL11.glBindTexture(3553, textures$7a7c7041.a("/char.png"));
        }
        else {
            GL11.glBindTexture(3553, this.a);
        }
        while (this.yBodyRotO - this.yBodyRot < -180.0f) {
            this.yBodyRotO += 360.0f;
        }
        while (this.yBodyRotO - this.yBodyRot >= 180.0f) {
            this.yBodyRotO -= 360.0f;
        }
        final float n3 = this.yBodyRotO + (this.yBodyRot - this.yBodyRotO) * n;
        while (this.xRotO - this.xRot < -180.0f) {
            this.xRotO += 360.0f;
        }
        while (this.xRotO - this.xRot >= 180.0f) {
            this.xRotO -= 360.0f;
        }
        while (this.yRotO - this.yRot < -180.0f) {
            this.yRotO += 360.0f;
        }
        while (this.yRotO - this.yRot >= 180.0f) {
            this.yRotO -= 360.0f;
        }
        final float n4 = this.yRotO + (this.yRot - this.yRotO) * n;
        final float n5 = this.xRotO + (this.xRot - this.xRotO) * n;
        final float n6 = -(n4 - n3);
        GL11.glPushMatrix();
        final float n7 = this.animStepO + (this.animStep - this.animStepO) * n;
        final float brightness;
        GL11.glColor3f(brightness = this.getBrightness(), brightness, brightness);
        final float n8 = 0.0625f;
        final float n9 = (float)(-Math.abs(Math.cos(n7 * 0.6662)) * 5.0 * n2 - 23.0);
        GL11.glTranslatef(this.xo + (this.x - this.xo) * n, this.yo + (this.y - this.yo) * n - this.heightOffset, this.zo + (this.z - this.zo) * n);
        GL11.glScalef(1.0f, -1.0f, 1.0f);
        GL11.glTranslatef(0.0f, n9 * n8, 0.0f);
        GL11.glRotatef(n3, 0.0f, 1.0f, 0.0f);
        GL11.glDisable(3008);
        GL11.glScalef(-1.0f, 1.0f, 1.0f);
        this.zombieModel.a(n7, n2, this.tickCount + n, n6, n5, n8);
        GL11.glEnable(3008);
        final l j = this.minecraft.j;
        GL11.glPopMatrix();
        GL11.glPushMatrix();
        GL11.glTranslatef(this.xo + (this.x - this.xo) * n, this.yo + (this.y - this.yo) * n + 0.8f, this.zo + (this.z - this.zo) * n);
        GL11.glRotatef(-this.minecraft.d.yRot, 0.0f, 1.0f, 0.0f);
        GL11.glScalef(n = 0.05f, -n, n);
        GL11.glTranslatef(-j.a(this.name) / 2.0f, 0.0f, 0.0f);
        GL11.glNormal3f(1.0f, -1.0f, 1.0f);
        GL11.glDisable(2896);
        GL11.glDisable(16384);
        if (this.name.equalsIgnoreCase("Notch")) {
            j.b(this.name, 0, 0, 16776960);
        }
        else {
            j.b(this.name, 0, 0, 16777215);
        }
        GL11.glEnable(16384);
        GL11.glEnable(2896);
        GL11.glTranslatef(1.0f, 1.0f, -0.05f);
        j.b(this.name, 0, 0, 5263440);
        GL11.glPopMatrix();
        GL11.glDisable(3553);
    }
    
    public void queue(final byte b, final byte b2, final byte b3, final float n, final float n2) {
        float n3 = n - this.yRot;
        float n4 = n2 - this.xRot;
        while (n3 >= 180.0f) {
            n3 -= 360.0f;
        }
        while (n3 < -180.0f) {
            n3 += 360.0f;
        }
        while (n4 >= 180.0f) {
            n4 -= 360.0f;
        }
        while (n4 < -180.0f) {
            n4 += 360.0f;
        }
        this.moveQueue.add(new b((this.xp + b / 2.0f) / 32.0f, (this.yp + b2 / 2.0f) / 32.0f, (this.zp + b3 / 2.0f) / 32.0f, this.yRot + n3 * 0.5f, this.xRot + n4 * 0.5f));
        this.xp += b;
        this.yp += b2;
        this.zp += b3;
        this.moveQueue.add(new b(this.xp / 32.0f, this.yp / 32.0f, this.zp / 32.0f, n, n2));
    }
    
    public void teleport(final short xp, final short yp, final short zp, final float n, final float n2) {
        float n3 = n - this.yRot;
        float n4 = n2 - this.xRot;
        while (n3 >= 180.0f) {
            n3 -= 360.0f;
        }
        while (n3 < -180.0f) {
            n3 += 360.0f;
        }
        while (n4 >= 180.0f) {
            n4 -= 360.0f;
        }
        while (n4 < -180.0f) {
            n4 += 360.0f;
        }
        this.moveQueue.add(new b((this.xp + xp) / 64.0f, (this.yp + yp) / 64.0f, (this.zp + zp) / 64.0f, this.yRot + n3 * 0.5f, this.xRot + n4 * 0.5f));
        this.xp = xp;
        this.yp = yp;
        this.zp = zp;
        this.moveQueue.add(new b(this.xp / 32.0f, this.yp / 32.0f, this.zp / 32.0f, n, n2));
    }
    
    public void queue(final byte b, final byte b2, final byte b3) {
        this.moveQueue.add(new b((this.xp + b / 2.0f) / 32.0f, (this.yp + b2 / 2.0f) / 32.0f, (this.zp + b3 / 2.0f) / 32.0f));
        this.xp += b;
        this.yp += b2;
        this.zp += b3;
        this.moveQueue.add(new b(this.xp / 32.0f, this.yp / 32.0f, this.zp / 32.0f));
    }
    
    public void queue(final float n, final float n2) {
        float n3 = n - this.yRot;
        float n4 = n2 - this.xRot;
        while (n3 >= 180.0f) {
            n3 -= 360.0f;
        }
        while (n3 < -180.0f) {
            n3 += 360.0f;
        }
        while (n4 >= 180.0f) {
            n4 -= 360.0f;
        }
        while (n4 < -180.0f) {
            n4 += 360.0f;
        }
        this.moveQueue.add(new b(this.yRot + n3 * 0.5f, this.xRot + n4 * 0.5f));
        this.moveQueue.add(new b(n, n2));
    }
    
    public void clear() {
        if (this.a >= 0) {
            System.out.println("Releasing texture for " + this.name);
            final com.mojang.minecraft.a.a textures$7a7c7041 = this.textures$7a7c7041;
            final int a = this.a;
            final com.mojang.minecraft.a.a a2 = textures$7a7c7041;
            textures$7a7c7041.a.clear();
            a2.a.put(a);
            a2.a.flip();
            GL11.glDeleteTextures(a2.a);
        }
    }
}
