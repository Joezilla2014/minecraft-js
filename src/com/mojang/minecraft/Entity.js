
package com.mojang.minecraft;

import com.mojang.minecraft.level.c.a;
import java.util.ArrayList;
import com.mojang.minecraft.net.b;
import com.mojang.minecraft.phys.AABB;
import com.mojang.minecraft.level.Level;
import java.io.Serializable;

public class Entity implements Serializable
{
    public static final long serialVersionUID = 0L;
    protected Level level;
    public float xo;
    public float yo;
    public float zo;
    public float x;
    public float y;
    public float z;
    public float xd;
    public float yd;
    public float zd;
    public float yRot;
    public float xRot;
    public float yRotO;
    public float xRotO;
    public AABB bb;
    public boolean onGround;
    public boolean horizontalCollision;
    public boolean removed;
    public float heightOffset;
    protected float bbWidth;
    public float bbHeight;
    
    public Entity(final Level level) {
        this.onGround = false;
        this.horizontalCollision = false;
        this.removed = false;
        this.heightOffset = 0.0f;
        this.bbWidth = 0.6f;
        this.bbHeight = 1.8f;
        this.level = level;
        this.setPos(0.0f, 0.0f, 0.0f);
    }
    
    protected void resetPos() {
        if (this.level == null) {
            return;
        }
        final float n = this.level.xSpawn + 0.5f;
        float n2 = (float)this.level.ySpawn;
        final float n3 = this.level.zSpawn + 0.5f;
        while (n2 > 0.0f) {
            this.setPos(n, n2, n3);
            if (this.level.getCubes(this.bb).size() == 0) {
                break;
            }
            ++n2;
        }
        final float xd = 0.0f;
        this.zd = xd;
        this.yd = xd;
        this.xd = xd;
        this.yRot = this.level.rotSpawn;
        this.xRot = 0.0f;
    }
    
    public void remove() {
        this.removed = true;
    }
    
    public void setSize(final float bbWidth, final float bbHeight) {
        this.bbWidth = bbWidth;
        this.bbHeight = bbHeight;
    }
    
    public void setPos(final b b) {
        if (b.g) {
            this.setPos(b.a, b.b, b.c);
        }
        else {
            this.setPos(this.x, this.y, this.z);
        }
        if (b.f) {
            this.setRot(b.d, b.e);
            return;
        }
        this.setRot(this.yRot, this.xRot);
    }
    
    protected void setRot(final float yRot, final float xRot) {
        this.yRot = yRot;
        this.xRot = xRot;
    }
    
    public void setPos(final float x, final float y, final float z) {
        this.x = x;
        this.y = y;
        this.z = z;
        final float n = this.bbWidth / 2.0f;
        final float n2 = this.bbHeight / 2.0f;
        this.bb = new AABB(x - n, y - n2, z - n, x + n, y + n2, z + n);
    }
    
    public void turn(final float n, final float n2) {
        final float xRot = this.xRot;
        final float yRot = this.yRot;
        this.yRot += (float)(n * 0.15);
        this.xRot -= (float)(n2 * 0.15);
        if (this.xRot < -90.0f) {
            this.xRot = -90.0f;
        }
        if (this.xRot > 90.0f) {
            this.xRot = 90.0f;
        }
        this.xRotO += this.xRot - xRot;
        this.yRotO += this.yRot - yRot;
    }
    
    public void interpolateTurn(final float n, final float n2) {
        this.yRot += (float)(n * 0.15);
        this.xRot -= (float)(n2 * 0.15);
        if (this.xRot < -90.0f) {
            this.xRot = -90.0f;
        }
        if (this.xRot > 90.0f) {
            this.xRot = 90.0f;
        }
    }
    
    public void tick() {
        this.xo = this.x;
        this.yo = this.y;
        this.zo = this.z;
        this.xRotO = this.xRot;
        this.yRotO = this.yRot;
    }
    
    public boolean isFree(final float n, final float n2, final float n3) {
        final AABB cloneMove = this.bb.cloneMove(n, n2, n3);
        return this.level.getCubes(cloneMove).size() <= 0 && !this.level.containsAnyLiquid(cloneMove);
    }
    
    public void move(float clipXCollide, float clipYCollide, float clipZCollide) {
        final float n = clipXCollide;
        final float n2 = clipYCollide;
        final float n3 = clipZCollide;
        final ArrayList cubes = this.level.getCubes(this.bb.expand(clipXCollide, clipYCollide, clipZCollide));
        for (int i = 0; i < cubes.size(); ++i) {
            clipYCollide = ((AABB)cubes.get(i)).clipYCollide(this.bb, clipYCollide);
        }
        this.bb.move(0.0f, clipYCollide, 0.0f);
        for (int j = 0; j < cubes.size(); ++j) {
            clipXCollide = ((AABB)cubes.get(j)).clipXCollide(this.bb, clipXCollide);
        }
        this.bb.move(clipXCollide, 0.0f, 0.0f);
        for (int k = 0; k < cubes.size(); ++k) {
            clipZCollide = ((AABB)cubes.get(k)).clipZCollide(this.bb, clipZCollide);
        }
        this.bb.move(0.0f, 0.0f, clipZCollide);
        this.horizontalCollision = (n != clipXCollide || n3 != clipZCollide);
        this.onGround = (n2 != clipYCollide && n2 < 0.0f);
        if (n != clipXCollide) {
            this.xd = 0.0f;
        }
        if (n2 != clipYCollide) {
            this.yd = 0.0f;
        }
        if (n3 != clipZCollide) {
            this.zd = 0.0f;
        }
        this.x = (this.bb.x0 + this.bb.x1) / 2.0f;
        this.y = this.bb.y0 + this.heightOffset;
        this.z = (this.bb.z0 + this.bb.z1) / 2.0f;
    }
    
    public boolean isInWater() {
        return this.level.containsLiquid(this.bb.grow(0.0f, -0.4f, 0.0f), a.b);
    }
    
    public boolean isInLava() {
        return this.level.containsLiquid(this.bb.grow(0.0f, -0.4f, 0.0f), a.c);
    }
    
    public void moveRelative(float n, float n2, float n3) {
        float n4;
        if ((n4 = (float)Math.sqrt(n * n + n2 * n2)) < 0.01f) {
            return;
        }
        if (n4 < 1.0f) {
            n4 = 1.0f;
        }
        final float n5 = n3 / n4;
        n *= n5;
        n2 *= n5;
        n3 = (float)Math.sin(this.yRot * 3.141592653589793 / 180.0);
        final float n6 = (float)Math.cos(this.yRot * 3.141592653589793 / 180.0);
        this.xd += n * n6 - n2 * n3;
        this.zd += n2 * n6 + n * n3;
    }
    
    public boolean isLit() {
        return this.level.isLit((int)this.x, (int)this.y, (int)this.z);
    }
    
    public float getBrightness() {
        return this.level.getBrightness((int)this.x, (int)(this.y + this.heightOffset / 2.0f), (int)this.z);
    }
    
    public void render$2a8c5a(final com.mojang.minecraft.a.a a, final float n) {
    }
    
    public void setLevel(final Level level) {
        this.level = level;
    }
    
    public void moveTo(final float n, final float n2, final float n3, final float yRot, final float xRot) {
        this.x = n;
        this.xo = n;
        this.y = n2;
        this.yo = n2;
        this.z = n3;
        this.zo = n3;
        this.yRot = yRot;
        this.xRot = xRot;
        this.setPos(n, n2, n3);
    }
}
