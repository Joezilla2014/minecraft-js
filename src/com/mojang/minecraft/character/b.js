
package com.mojang.minecraft.character;

public final class b
{
    public e[] a;
    
    private b(final e[] a) {
        this.a = a;
    }
    
    public b(final e[] array, final int n, final int n2, final int n3, final int n4) {
        this(array);
        array[0] = array[0].a((float)n3, (float)n2);
        array[1] = array[1].a((float)n, (float)n2);
        array[2] = array[2].a((float)n, (float)n4);
        array[3] = array[3].a((float)n3, (float)n4);
    }
}
