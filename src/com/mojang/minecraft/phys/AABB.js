
package com.mojang.minecraft.phys;

import java.io.Serializable;

public class AABB implements Serializable
{
    public static final long serialVersionUID = 0L;
    private float epsilon;
    public float x0;
    public float y0;
    public float z0;
    public float x1;
    public float y1;
    public float z1;
    
    public AABB(final float x0, final float y0, final float z0, final float x2, final float y2, final float z2) {
        this.epsilon = 0.0f;
        this.x0 = x0;
        this.y0 = y0;
        this.z0 = z0;
        this.x1 = x2;
        this.y1 = y2;
        this.z1 = z2;
    }
    
    public AABB expand(final float n, final float n2, final float n3) {
        float x0 = this.x0;
        float y0 = this.y0;
        float z0 = this.z0;
        float x2 = this.x1;
        float y2 = this.y1;
        float z2 = this.z1;
        if (n < 0.0f) {
            x0 += n;
        }
        if (n > 0.0f) {
            x2 += n;
        }
        if (n2 < 0.0f) {
            y0 += n2;
        }
        if (n2 > 0.0f) {
            y2 += n2;
        }
        if (n3 < 0.0f) {
            z0 += n3;
        }
        if (n3 > 0.0f) {
            z2 += n3;
        }
        return new AABB(x0, y0, z0, x2, y2, z2);
    }
    
    public AABB grow(float n, float n2, final float n3) {
        final float n4 = this.x0 - n;
        final float n5 = this.y0 - n2;
        final float n6 = this.z0 - n3;
        n += this.x1;
        n2 += this.y1;
        return new AABB(n4, n5, n6, n, n2, this.z1 + n3);
    }
    
    public AABB cloneMove(final float n, final float n2, final float n3) {
        return new AABB(this.x0 + n3, this.y0 + n2, this.z0 + n3, this.x1 + n, this.y1 + n2, this.z1 + n3);
    }
    
    public float clipXCollide(final AABB aabb, float n) {
        if (aabb.y1 <= this.y0 || aabb.y0 >= this.y1) {
            return n;
        }
        if (aabb.z1 <= this.z0 || aabb.z0 >= this.z1) {
            return n;
        }
        final float n2;
        if (n > 0.0f && aabb.x1 <= this.x0 && (n2 = this.x0 - aabb.x1 - this.epsilon) < n) {
            n = n2;
        }
        final float n3;
        if (n < 0.0f && aabb.x0 >= this.x1 && (n3 = this.x1 - aabb.x0 + this.epsilon) > n) {
            n = n3;
        }
        return n;
    }
    
    public float clipYCollide(final AABB aabb, float n) {
        if (aabb.x1 <= this.x0 || aabb.x0 >= this.x1) {
            return n;
        }
        if (aabb.z1 <= this.z0 || aabb.z0 >= this.z1) {
            return n;
        }
        final float n2;
        if (n > 0.0f && aabb.y1 <= this.y0 && (n2 = this.y0 - aabb.y1 - this.epsilon) < n) {
            n = n2;
        }
        final float n3;
        if (n < 0.0f && aabb.y0 >= this.y1 && (n3 = this.y1 - aabb.y0 + this.epsilon) > n) {
            n = n3;
        }
        return n;
    }
    
    public float clipZCollide(final AABB aabb, float n) {
        if (aabb.x1 <= this.x0 || aabb.x0 >= this.x1) {
            return n;
        }
        if (aabb.y1 <= this.y0 || aabb.y0 >= this.y1) {
            return n;
        }
        final float n2;
        if (n > 0.0f && aabb.z1 <= this.z0 && (n2 = this.z0 - aabb.z1 - this.epsilon) < n) {
            n = n2;
        }
        final float n3;
        if (n < 0.0f && aabb.z0 >= this.z1 && (n3 = this.z1 - aabb.z0 + this.epsilon) > n) {
            n = n3;
        }
        return n;
    }
    
    public boolean intersects(final AABB aabb) {
        return aabb.x1 > this.x0 && aabb.x0 < this.x1 && aabb.y1 > this.y0 && aabb.y0 < this.y1 && aabb.z1 > this.z0 && aabb.z0 < this.z1;
    }
    
    public void move(final float n, final float n2, final float n3) {
        this.x0 += n;
        this.y0 += n2;
        this.z0 += n3;
        this.x1 += n;
        this.y1 += n2;
        this.z1 += n3;
    }
}
