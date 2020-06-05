
package com.mojang.minecraft.level;

import java.io.ObjectOutputStream;
import java.util.zip.GZIPOutputStream;
import java.io.ObjectInputStream;
import java.util.zip.GZIPInputStream;
import java.io.InputStream;
import java.io.DataInputStream;
import java.io.Reader;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.DataOutputStream;
import java.net.URL;
import java.net.HttpURLConnection;
import java.io.OutputStream;
import java.io.ByteArrayOutputStream;
import com.mojang.minecraft.d;

public final class a
{
    private d a;
    
    public a(final d a) {
        this.a = a;
    }
    
    public final boolean a(final Level level, String line, final String str, String str2, final String str3, final int v) {
        if (str2 == null) {
            str2 = "";
        }
        if (this.a != null && this.a != null) {
            this.a.a("Saving level");
        }
        try {
            if (this.a != null && this.a != null) {
                this.a.b("Compressing..");
            }
            final ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            a(level, byteArrayOutputStream);
            byteArrayOutputStream.close();
            final byte[] byteArray = byteArrayOutputStream.toByteArray();
            if (this.a != null && this.a != null) {
                this.a.b("Connecting..");
            }
            final HttpURLConnection httpURLConnection;
            (httpURLConnection = (HttpURLConnection)new URL("http://" + line + "/level/save.html").openConnection()).setDoInput(true);
            httpURLConnection.setDoOutput(true);
            httpURLConnection.setRequestMethod("POST");
            final DataOutputStream dataOutputStream;
            (dataOutputStream = new DataOutputStream(httpURLConnection.getOutputStream())).writeUTF(str);
            dataOutputStream.writeUTF(str2);
            dataOutputStream.writeUTF(str3);
            dataOutputStream.writeByte(v);
            dataOutputStream.writeInt(byteArray.length);
            if (this.a != null) {
                this.a.b("Saving..");
            }
            dataOutputStream.write(byteArray);
            dataOutputStream.close();
            final BufferedReader bufferedReader;
            if (!(line = (bufferedReader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()))).readLine()).equalsIgnoreCase("ok")) {
                if (this.a != null) {
                    this.a.b("Failed: " + bufferedReader.readLine());
                }
                bufferedReader.close();
                Thread.sleep(1000L);
                return false;
            }
            bufferedReader.close();
            return true;
        }
        catch (Exception ex) {
            ex.printStackTrace();
            if (this.a != null) {
                this.a.b("Failed!");
            }
            try {
                Thread.sleep(1000L);
            }
            catch (InterruptedException ex2) {}
            return false;
        }
    }
    
    public final Level a(final String str, String utf, final int i) {
        if (this.a != null) {
            this.a.a("Loading level");
        }
        try {
            if (this.a != null) {
                this.a.b("Connecting..");
            }
            final HttpURLConnection httpURLConnection;
            (httpURLConnection = (HttpURLConnection)new URL("http://" + str + "/level/load.html?id=" + i + "&user=" + utf).openConnection()).setDoInput(true);
            if (this.a != null) {
                this.a.b("Loading..");
            }
            final DataInputStream dataInputStream;
            if ((utf = (dataInputStream = new DataInputStream(httpURLConnection.getInputStream())).readUTF()).equalsIgnoreCase("ok")) {
                return this.a(dataInputStream);
            }
            if (this.a != null) {
                this.a.b("Failed: " + dataInputStream.readUTF());
            }
            dataInputStream.close();
            Thread.sleep(1000L);
            return null;
        }
        catch (Exception ex) {
            ex.printStackTrace();
            if (this.a != null) {
                this.a.b("Failed!");
            }
            try {
                Thread.sleep(3000L);
            }
            catch (InterruptedException ex2) {}
            return null;
        }
    }
    
    public final Level a(final InputStream in) {
        if (this.a != null) {
            this.a.a("Loading level");
        }
        if (this.a != null) {
            this.a.b("Reading..");
        }
        try {
            final DataInputStream in2;
            final int int1;
            if ((int1 = (in2 = new DataInputStream(new GZIPInputStream(in))).readInt()) != 656127880) {
                return null;
            }
            final byte byte1;
            if ((byte1 = in2.readByte()) > 2) {
                return null;
            }
            if (byte1 <= 1) {
                System.out.println("Version is 1!");
                final String utf = in2.readUTF();
                final String utf2 = in2.readUTF();
                final long long1 = in2.readLong();
                final short short1 = in2.readShort();
                final short short2 = in2.readShort();
                final short short3 = in2.readShort();
                final byte[] b = new byte[short1 * short2 * short3];
                in2.readFully(b);
                in2.close();
                final Level level;
                (level = new Level()).setData(short1, short3, short2, b);
                level.name = utf;
                level.creator = utf2;
                level.createTime = long1;
                return level;
            }
            final ObjectInputStream objectInputStream;
            final Level level2;
            (level2 = (Level)(objectInputStream = new ObjectInputStream(in2)).readObject()).initTransient();
            objectInputStream.close();
            return level2;
        }
        catch (Exception ex2) {
            final Exception ex = ex2;
            ex2.printStackTrace();
            new StringBuilder().append("Failed to load level: ").append(ex.toString()).toString();
            return null;
        }
    }
    
    public final Level b(final InputStream in) {
        if (this.a != null) {
            this.a.a("Loading level");
        }
        if (this.a != null) {
            this.a.b("Reading..");
        }
        try {
            final DataInputStream dataInputStream = new DataInputStream(new GZIPInputStream(in));
            final String name = "--";
            final String creator = "unknown";
            final byte[] b = new byte[256 << 8 << 6];
            dataInputStream.readFully(b);
            dataInputStream.close();
            final Level level;
            (level = new Level()).setData(256, 64, 256, b);
            level.name = name;
            level.creator = creator;
            level.createTime = 0L;
            return level;
        }
        catch (Exception ex2) {
            final Exception ex = ex2;
            ex2.printStackTrace();
            new StringBuilder().append("Failed to load level: ").append(ex.toString()).toString();
            return null;
        }
    }
    
    public static void a(final Level obj, final OutputStream out) {
        try {
            final DataOutputStream out2;
            (out2 = new DataOutputStream(new GZIPOutputStream(out))).writeInt(656127880);
            out2.writeByte(2);
            final ObjectOutputStream objectOutputStream;
            (objectOutputStream = new ObjectOutputStream(out2)).writeObject(obj);
            objectOutputStream.close();
        }
        catch (Exception ex) {
            ex.printStackTrace();
        }
    }
    
    public static byte[] c(final InputStream in) {
        try {
            final DataInputStream dataInputStream;
            final byte[] b = new byte[(dataInputStream = new DataInputStream(new GZIPInputStream(in))).readInt()];
            dataInputStream.readFully(b);
            dataInputStream.close();
            return b;
        }
        catch (Exception cause) {
            throw new RuntimeException(cause);
        }
    }
}
