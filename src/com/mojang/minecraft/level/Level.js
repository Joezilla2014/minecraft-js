
package com.mojang.minecraft.level;

import com.mojang.minecraft.e;
import com.mojang.minecraft.character.c;
import com.mojang.minecraft.Entity;
import com.mojang.minecraft.phys.AABB;
import com.mojang.minecraft.level.a.a;
import com.mojang.minecraft.a.g;
import java.util.Arrays;
import java.util.Random;
import java.util.ArrayList;
import java.io.Serializable;

public class Level implements Serializable
{
    public static final long serialVersionUID = 0L;
    public int width;
    public int height;
    public int depth;
    public byte[] blocks;
    public String name;
    public String creator;
    public long createTime;
    public int xSpawn;
    public int ySpawn;
    public int zSpawn;
    public float rotSpawn;
    private transient ArrayList a;
    private transient int[] b;
    private transient Random c;
    private transient int d;
    private transient ArrayList e;
    public ArrayList entities;
    private boolean networkMode;
    int unprocessed;
    private int tickCount;
    
    public Level() {
        this.a = new ArrayList();
        this.c = new Random();
        this.d = this.c.nextInt();
        this.e = new ArrayList();
        this.entities = new ArrayList();
        this.networkMode = false;
        this.unprocessed = 0;
        this.tickCount = 0;
    }
    
    public void initTransient() {
        if (this.blocks == null) {
            throw new RuntimeException("The level is corrupt!");
        }
        this.a = new ArrayList();
        Arrays.fill(this.b = new int[this.width * this.height], this.depth);
        this.calcLightDepths(0, 0, this.width, this.height);
        this.c = new Random();
        this.d = this.c.nextInt();
        this.e = new ArrayList();
        if (this.entities == null) {
            this.entities = new ArrayList();
        }
        if (this.xSpawn == 0 && this.ySpawn == 0 && this.zSpawn == 0) {
            this.findSpawn();
        }
    }
    
    public void setData(int i, final int depth, final int height, final byte[] blocks) {
        this.width = i;
        this.height = height;
        this.depth = depth;
        this.blocks = blocks;
        Arrays.fill(this.b = new int[i * height], this.depth);
        this.calcLightDepths(0, 0, i, height);
        for (i = 0; i < this.a.size(); ++i) {
            this.a.get(i).a();
        }
        this.e.clear();
        this.findSpawn();
        System.gc();
    }
    
    public void findSpawn() {
        final Random random = new Random();
        int n = 0;
        int ySpawn;
        int n2;
        int n3;
        do {
            ++n;
            n2 = random.nextInt(this.width / 2) + this.width / 4;
            n3 = random.nextInt(this.height / 2) + this.height / 4;
            ySpawn = this.getHighestTile(n2, n3) + 1;
            if (n == 10000) {
                this.xSpawn = n2;
                this.ySpawn = -100;
                this.zSpawn = n3;
                return;
            }
        } while (ySpawn <= this.getWaterLevel());
        this.xSpawn = n2;
        this.ySpawn = ySpawn;
        this.zSpawn = n3;
    }
    
    public void calcLightDepths(final int n, final int n2, final int n3, final int n4) {
        for (int i = n; i < n + n3; ++i) {
            for (int j = n2; j < n2 + n4; ++j) {
                final int n5 = this.b[i + j * this.width];
                int n6;
                for (n6 = this.depth - 1; n6 > 0 && !this.isLightBlocker(i, n6, j); --n6) {}
                this.b[i + j * this.width] = n6 + 1;
                if (n5 != n6) {
                    final int n7 = (n5 < n6) ? n5 : n6;
                    final int n8 = (n5 > n6) ? n5 : n6;
                    for (int k = 0; k < this.a.size(); ++k) {
                        final g g = this.a.get(k);
                        final int n9 = i;
                        final int n10 = j;
                        final int n11 = n7;
                        final int n12 = n8;
                        final int n13 = n11;
                        final int n14 = n10;
                        final int n15 = n9;
                        g.a(n15 - 1, n13 - 1, n14 - 1, n15 + 1, n12 + 1, n14 + 1);
                    }
                }
            }
        }
    }
    
    public void addListener$74652038(final g e) {
        this.a.add(e);
    }
    
    public void finalize() {
    }
    
    public void removeListener$74652038(final g o) {
        this.a.remove(o);
    }
    
    public boolean isLightBlocker(final int n, final int n2, final int n3) {
        final a a;
        return (a = com.mojang.minecraft.level.a.a.a[this.getTile(n, n2, n3)]) != null && a.a();
    }
    
    public ArrayList getCubes(final AABB aabb) {
        final ArrayList<AABB> list = new ArrayList<AABB>();
        int n = (int)aabb.x0;
        final int n2 = (int)aabb.x1 + 1;
        int n3 = (int)aabb.y0;
        final int n4 = (int)aabb.y1 + 1;
        int n5 = (int)aabb.z0;
        final int n6 = (int)aabb.z1 + 1;
        if (aabb.x0 < 0.0f) {
            --n;
        }
        if (aabb.y0 < 0.0f) {
            --n3;
        }
        if (aabb.z0 < 0.0f) {
            --n5;
        }
        for (int i = n; i < n2; ++i) {
            for (int j = n3; j < n4; ++j) {
                for (int k = n5; k < n6; ++k) {
                    if (i >= 0 && j >= 0 && k >= 0 && i < this.width && j < this.depth && k < this.height) {
                        final a a;
                        final AABB a2;
                        if ((a = com.mojang.minecraft.level.a.a.a[this.getTile(i, j, k)]) != null && (a2 = a.a(i, j, k)) != null) {
                            list.add(a2);
                        }
                    }
                    else {
                        final AABB a3;
                        if ((i < 0 || j < 0 || k < 0 || i >= this.width || k >= this.height) && (a3 = com.mojang.minecraft.level.a.a.i.a(i, j, k)) != null) {
                            list.add(a3);
                        }
                    }
                }
            }
        }
        return list;
    }
    
    public void swap(final int n, final int n2, final int n3, final int n4, final int n5, final int n6) {
        if (this.networkMode) {
            return;
        }
        final int tile = this.getTile(n, n2, n3);
        final int tile2 = this.getTile(n4, n5, n6);
        this.setTileNoNeighborChange(n, n2, n3, tile2);
        this.setTileNoNeighborChange(n4, n5, n6, tile);
        this.updateNeighborsAt(n, n2, n3, tile2);
        this.updateNeighborsAt(n4, n5, n6, tile);
    }
    
    public boolean setTileNoNeighborChange(final int n, final int n2, final int n3, final int n4) {
        return !this.networkMode && this.netSetTileNoNeighborChange(n, n2, n3, n4);
    }
    
    public boolean netSetTileNoNeighborChange(final int n, final int n2, final int n3, int i) {
        if (n < 0 || n2 < 0 || n3 < 0 || n >= this.width || n2 >= this.depth || n3 >= this.height) {
            return false;
        }
        if (i == this.blocks[(n2 * this.height + n3) * this.width + n]) {
            return false;
        }
        if (i == 0 && (n == 0 || n3 == 0 || n == this.width - 1 || n3 == this.height - 1) && n2 >= this.getGroundLevel() && n2 < this.getWaterLevel()) {
            i = com.mojang.minecraft.level.a.a.j.S;
        }
        final byte b = this.blocks[(n2 * this.height + n3) * this.width + n];
        this.blocks[(n2 * this.height + n3) * this.width + n] = (byte)i;
        if (b != 0) {
            com.mojang.minecraft.level.a.a.a[b].d(this, n, n2, n3);
        }
        if (i != 0) {
            com.mojang.minecraft.level.a.a.a[i].c(this, n, n2, n3);
        }
        this.calcLightDepths(n, n3, 1, 1);
        for (i = 0; i < this.a.size(); ++i) {
            this.a.get(i).a(n - 1, n2 - 1, n3 - 1, n + 1, n2 + 1, n3 + 1);
        }
        return true;
    }
    
    public boolean setTile(final int n, final int n2, final int n3, final int n4) {
        if (this.networkMode) {
            return false;
        }
        if (this.setTileNoNeighborChange(n, n2, n3, n4)) {
            this.updateNeighborsAt(n, n2, n3, n4);
            return true;
        }
        return false;
    }
    
    public boolean netSetTile(final int n, final int n2, final int n3, final int n4) {
        if (this.netSetTileNoNeighborChange(n, n2, n3, n4)) {
            this.updateNeighborsAt(n, n2, n3, n4);
            return true;
        }
        return false;
    }
    
    public void updateNeighborsAt(final int n, final int n2, final int n3, final int n4) {
        this.a(n - 1, n2, n3, n4);
        this.a(n + 1, n2, n3, n4);
        this.a(n, n2 - 1, n3, n4);
        this.a(n, n2 + 1, n3, n4);
        this.a(n, n2, n3 - 1, n4);
        this.a(n, n2, n3 + 1, n4);
    }
    
    public boolean setTileNoUpdate(final int n, final int n2, final int n3, final int n4) {
        if (n < 0 || n2 < 0 || n3 < 0 || n >= this.width || n2 >= this.depth || n3 >= this.height) {
            return false;
        }
        if (n4 == this.blocks[(n2 * this.height + n3) * this.width + n]) {
            return false;
        }
        this.blocks[(n2 * this.height + n3) * this.width + n] = (byte)n4;
        return true;
    }
    
    private void a(final int n, final int n2, final int n3, final int n4) {
        if (n < 0 || n2 < 0 || n3 < 0 || n >= this.width || n2 >= this.depth || n3 >= this.height) {
            return;
        }
        final a a;
        if ((a = com.mojang.minecraft.level.a.a.a[this.blocks[(n2 * this.height + n3) * this.width + n]]) != null) {
            a.a(this, n, n2, n3, n4);
        }
    }
    
    public boolean isLit(final int n, final int n2, final int n3) {
        return n < 0 || n2 < 0 || n3 < 0 || n >= this.width || n2 >= this.depth || n3 >= this.height || n2 >= this.b[n + n3 * this.width];
    }
    
    public int getTile(final int n, final int n2, final int n3) {
        if (n < 0 || n2 < 0 || n3 < 0 || n >= this.width || n2 >= this.depth || n3 >= this.height) {
            return 0;
        }
        return this.blocks[(n2 * this.height + n3) * this.width + n] & 0xFF;
    }
    
    public boolean isSolidTile(final int n, final int n2, final int n3) {
        final a a;
        return (a = com.mojang.minecraft.level.a.a.a[this.getTile(n, n2, n3)]) != null && a.b();
    }
    
    public void tickEntities() {
        for (int i = 0; i < this.entities.size(); ++i) {
            ((Entity)this.entities.get(i)).tick();
            if (((Entity)this.entities.get(i)).removed) {
                this.entities.remove(i--);
            }
        }
    }
    
    public void tick() {
        ++this.tickCount;
        int n = 1;
        int n2 = 1;
        while (1 << n < this.width) {
            ++n;
        }
        while (1 << n2 < this.height) {
            ++n2;
        }
        final int n3 = this.height - 1;
        final int n4 = this.width - 1;
        final int n5 = this.depth - 1;
        if (this.tickCount % 5 == 0) {
            for (int size = this.e.size(), i = 0; i < size; ++i) {
                final b e;
                if ((e = this.e.remove(0)).e > 0) {
                    final b b = e;
                    --b.e;
                    this.e.add(e);
                }
                else {
                    final byte b2;
                    if (this.a(e.a, e.b, e.c) && (b2 = this.blocks[(e.b * this.height + e.c) * this.width + e.a]) == e.d && b2 > 0) {
                        com.mojang.minecraft.level.a.a.a[b2].a(this, e.a, e.b, e.c, this.c);
                    }
                }
            }
        }
        this.unprocessed += this.width * this.height * this.depth;
        final int n6 = this.unprocessed / 200;
        this.unprocessed -= n6 * 200;
        for (int j = 0; j < n6; ++j) {
            this.d = this.d * 3 + 1013904223;
            final int n8;
            final int n7 = (n8 = this.d >> 2) & n4;
            final int n9 = n8 >> n & n3;
            final int n10 = n8 >> n + n2 & n5;
            final byte b3 = this.blocks[(n10 * this.height + n9) * this.width + n7];
            if (com.mojang.minecraft.level.a.a.b[b3]) {
                com.mojang.minecraft.level.a.a.a[b3].a(this, n7, n10, n9, this.c);
            }
        }
    }
    
    private boolean a(final int n, final int n2, final int n3) {
        return n >= 0 && n2 >= 0 && n3 >= 0 && n < this.width && n2 < this.depth && n3 < this.height;
    }
    
    public float getGroundLevel() {
        return (float)(this.depth / 2 - 2);
    }
    
    public float getWaterLevel() {
        return (float)(this.depth / 2);
    }
    
    public boolean containsAnyLiquid(final AABB aabb) {
        int n = (int)aabb.x0;
        int width = (int)aabb.x1 + 1;
        int n2 = (int)aabb.y0;
        int depth = (int)aabb.y1 + 1;
        int n3 = (int)aabb.z0;
        int height = (int)aabb.z1 + 1;
        if (aabb.x0 < 0.0f) {
            --n;
        }
        if (aabb.y0 < 0.0f) {
            --n2;
        }
        if (aabb.z0 < 0.0f) {
            --n3;
        }
        if (n < 0) {
            n = 0;
        }
        if (n2 < 0) {
            n2 = 0;
        }
        if (n3 < 0) {
            n3 = 0;
        }
        if (width > this.width) {
            width = this.width;
        }
        if (depth > this.depth) {
            depth = this.depth;
        }
        if (height > this.height) {
            height = this.height;
        }
        for (int i = n; i < width; ++i) {
            for (int j = n2; j < depth; ++j) {
                for (int k = n3; k < height; ++k) {
                    final a a;
                    if ((a = com.mojang.minecraft.level.a.a.a[this.getTile(i, j, k)]) != null && a.c() != com.mojang.minecraft.level.c.a.a) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    
    public boolean containsLiquid(final AABB aabb, final com.mojang.minecraft.level.c.a a) {
        int n = (int)aabb.x0;
        int width = (int)aabb.x1 + 1;
        int n2 = (int)aabb.y0;
        int depth = (int)aabb.y1 + 1;
        int n3 = (int)aabb.z0;
        int height = (int)aabb.z1 + 1;
        if (aabb.x0 < 0.0f) {
            --n;
        }
        if (aabb.y0 < 0.0f) {
            --n2;
        }
        if (aabb.z0 < 0.0f) {
            --n3;
        }
        if (n < 0) {
            n = 0;
        }
        if (n2 < 0) {
            n2 = 0;
        }
        if (n3 < 0) {
            n3 = 0;
        }
        if (width > this.width) {
            width = this.width;
        }
        if (depth > this.depth) {
            depth = this.depth;
        }
        if (height > this.height) {
            height = this.height;
        }
        for (int i = n; i < width; ++i) {
            for (int j = n2; j < depth; ++j) {
                for (int k = n3; k < height; ++k) {
                    final a a2;
                    if ((a2 = a.a[this.getTile(i, j, k)]) != null && a2.c() == a) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    
    public void addToTickNextTick(final int n, final int n2, int d, final int n3) {
        if (this.networkMode) {
            return;
        }
        final b e = new b(n, n2, d, n3);
        if (n3 > 0) {
            final b b = e;
            d = com.mojang.minecraft.level.a.a.a[n3].d();
            b.e = d;
        }
        this.e.add(e);
    }
    
    public boolean isFree(final AABB aabb) {
        for (int i = 0; i < this.entities.size(); ++i) {
            if (((Entity)this.entities.get(i)).bb.intersects(aabb)) {
                return false;
            }
        }
        return true;
    }
    
    public boolean isSolid(final float n, final float n2, final float n3, final float n4) {
        return this.a(n - n4, n2 - n4, n3 - n4) || this.a(n - n4, n2 - n4, n3 + n4) || this.a(n - n4, n2 + n4, n3 - n4) || this.a(n - n4, n2 + n4, n3 + n4) || this.a(n + n4, n2 - n4, n3 - n4) || this.a(n + n4, n2 - n4, n3 + n4) || this.a(n + n4, n2 + n4, n3 - n4) || this.a(n + n4, n2 + n4, n3 + n4);
    }
    
    private boolean a(final float n, final float n2, final float n3) {
        final int tile;
        return (tile = this.getTile((int)n, (int)n2, (int)n3)) > 0 && com.mojang.minecraft.level.a.a.a[tile].b();
    }
    
    public int getHighestTile(final int n, final int n2) {
        int depth;
        for (depth = this.depth; (this.getTile(n, depth - 1, n2) == 0 || com.mojang.minecraft.level.a.a.a[this.getTile(n, depth - 1, n2)].c() != com.mojang.minecraft.level.c.a.a) && depth > 0; --depth) {}
        return depth;
    }
    
    public void setSpawnPos(final int xSpawn, final int ySpawn, final int zSpawn, final float rotSpawn) {
        this.xSpawn = xSpawn;
        this.ySpawn = ySpawn;
        this.zSpawn = zSpawn;
        this.rotSpawn = rotSpawn;
    }
    
    public float getBrightness(final int n, final int n2, final int n3) {
        if (this.isLit(n, n2, n3)) {
            return 1.0f;
        }
        return 0.6f;
    }
    
    public float getCaveness(final float n, final float n2, final float n3, final float n4) {
        final int n5 = (int)n;
        final int n6 = (int)n2;
        final int n7 = (int)n3;
        float n8 = 0.0f;
        float n9 = 0.0f;
        for (int i = n5 - 6; i <= n5 + 6; ++i) {
            for (int j = n7 - 6; j <= n7 + 6; ++j) {
                if (this.a(i, n6, j) && !this.isSolidTile(i, n6, j)) {
                    final float n10 = i + 0.5f - n;
                    float n12;
                    float n11;
                    for (n11 = (float)(Math.atan2(n12 = j + 0.5f - n3, n10) - n4 * 3.141592653589793 / 180.0 + 1.5707963267948966); n11 < -3.141592653589793; n11 += (float)6.283185307179586) {}
                    while (n11 >= 3.141592653589793) {
                        n11 -= (float)6.283185307179586;
                    }
                    if (n11 < 0.0f) {
                        n11 = -n11;
                    }
                    float n13 = 1.0f / (float)Math.sqrt(n10 * n10 + 4.0f + n12 * n12);
                    if (n11 > 1.0f) {
                        n13 = 0.0f;
                    }
                    if (n13 < 0.0f) {
                        n13 = 0.0f;
                    }
                    n9 += n13;
                    if (this.isLit(i, n6, j)) {
                        n8 += n13;
                    }
                }
            }
        }
        if (n9 == 0.0f) {
            return 0.0f;
        }
        return n8 / n9;
    }
    
    public float getCaveness(final Entity entity) {
        final float n = (float)Math.cos(-entity.yRot * 3.141592653589793 / 180.0 + 3.141592653589793);
        final float n2 = (float)Math.sin(-entity.yRot * 3.141592653589793 / 180.0 + 3.141592653589793);
        final float n3 = (float)Math.cos(-entity.xRot * 3.141592653589793 / 180.0);
        final float n4 = (float)Math.sin(-entity.xRot * 3.141592653589793 / 180.0);
        final float x = entity.x;
        final float y = entity.y;
        final float z = entity.z;
        final float n5 = 1.6f;
        float n6 = 0.0f;
        float n7 = 0.0f;
        for (int i = 0; i <= 200; ++i) {
            final float n8 = (i / (float)200 - 0.5f) * 2.0f;
            for (int j = 0; j <= 200; ++j) {
                final float n9 = (j / (float)200 - 0.5f) * n5;
                final float n10 = n8;
                final float n11 = n3 * n9 + n4;
                final float n12 = n3 - n4 * n9;
                final float n13 = n * n10 + n2 * n12;
                final float n14 = n11;
                final float n15 = n * n12 - n2 * n10;
                for (int k = 0; k < 10; ++k) {
                    final float n16 = x + n13 * k * 0.8f;
                    final float n17 = y + n14 * k * 0.8f;
                    final float n18 = z + n15 * k * 0.8f;
                    if (this.a(n16, n17, n18)) {
                        break;
                    }
                    ++n6;
                    if (this.isLit((int)n16, (int)n17, (int)n18)) {
                        ++n7;
                    }
                }
            }
        }
        if (n6 == 0.0f) {
            return 0.0f;
        }
        float n19;
        if ((n19 = n7 / n6 / 0.1f) > 1.0f) {
            n19 = 1.0f;
        }
        final float n20 = 1.0f - n19;
        return 1.0f - n20 * n20 * n20;
    }
    
    public byte[] copyBlocks() {
        return Arrays.copyOf(this.blocks, this.blocks.length);
    }
    
    public boolean isWater(final int n, final int n2, final int n3) {
        final int tile;
        return (tile = this.getTile(n, n2, n3)) > 0 && com.mojang.minecraft.level.a.a.a[tile].c() == com.mojang.minecraft.level.c.a.b;
    }
    
    public void setNetworkMode(final boolean networkMode) {
        this.networkMode = networkMode;
    }
    
    public e clip(final c c, final c c2) {
        if (Float.isNaN(c.a) || Float.isNaN(c.b) || Float.isNaN(c.c)) {
            return null;
        }
        if (Float.isNaN(c2.a) || Float.isNaN(c2.b) || Float.isNaN(c2.c)) {
            return null;
        }
        final int n = (int)Math.floor(c2.a);
        final int n2 = (int)Math.floor(c2.b);
        final int n3 = (int)Math.floor(c2.c);
        int n4 = (int)Math.floor(c.a);
        int n5 = (int)Math.floor(c.b);
        int n6 = (int)Math.floor(c.c);
        while (!Float.isNaN(c.a) && !Float.isNaN(c.b) && !Float.isNaN(c.c)) {
            if (n4 == n && n5 == n2 && n6 == n3) {
                return null;
            }
            float a = 999.0f;
            float b = 999.0f;
            float c3 = 999.0f;
            if (n > n4) {
                a = n4 + 1.0f;
            }
            if (n < n4) {
                a = (float)n4;
            }
            if (n2 > n5) {
                b = n5 + 1.0f;
            }
            if (n2 < n5) {
                b = (float)n5;
            }
            if (n3 > n6) {
                c3 = n6 + 1.0f;
            }
            if (n3 < n6) {
                c3 = (float)n6;
            }
            float n7 = 999.0f;
            float n8 = 999.0f;
            float n9 = 999.0f;
            final float n10 = c2.a - c.a;
            final float n11 = c2.b - c.b;
            final float n12 = c2.c - c.c;
            if (a != 999.0f) {
                n7 = (a - c.a) / n10;
            }
            if (b != 999.0f) {
                n8 = (b - c.b) / n11;
            }
            if (c3 != 999.0f) {
                n9 = (c3 - c.c) / n12;
            }
            int n13;
            if (n7 < n8 && n7 < n9) {
                if (n > n4) {
                    n13 = 4;
                }
                else {
                    n13 = 5;
                }
                c.a = a;
                c.b += n11 * n7;
                c.c += n12 * n7;
            }
            else if (n8 < n9) {
                if (n2 > n5) {
                    n13 = 0;
                }
                else {
                    n13 = 1;
                }
                c.a += n10 * n8;
                c.b = b;
                c.c += n12 * n8;
            }
            else {
                if (n3 > n6) {
                    n13 = 2;
                }
                else {
                    n13 = 3;
                }
                c.a += n10 * n9;
                c.b += n11 * n9;
                c.c = c3;
            }
            n4 = (int)Math.floor(c.a);
            if (n13 == 5) {
                --n4;
            }
            n5 = (int)Math.floor(c.b);
            if (n13 == 1) {
                --n5;
            }
            n6 = (int)Math.floor(c.c);
            if (n13 == 3) {
                --n6;
            }
            final int tile;
            if ((tile = this.getTile(n4, n5, n6)) > 0 && com.mojang.minecraft.level.a.a.a[tile].c() == com.mojang.minecraft.level.c.a.a) {
                return new e(0, n4, n5, n6, n13);
            }
        }
        return null;
    }
}
