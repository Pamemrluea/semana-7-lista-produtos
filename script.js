import java.util.ArrayList;
import java.util.List;
import java.util.Random;

class Producto {
    private String nombre;
    private double precio;
    private String descripcion;

    public Producto(String nombre, double precio, String descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }

    public String getNombre() { return nombre; }
    public double getPrecio() { return precio; }
    public String getDescripcion() { return descripcion; }

    public void setNombre(String nombre) { this.nombre = nombre; }
    public void setPrecio(double precio) { this.precio = precio; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }
}

public class Main {
    private static List<Producto> productos = new ArrayList<>();
    private static Random random = new Random();

    public static void main(String[] args) {
        // Agregar productos iniciales
        productos.add(new Producto("Laptop", 999.99, "Portátil de alto rendimiento"));
        productos.add(new Producto("Mouse Inalámbrico", 29.99, "Ergonómico y silencioso"));
        productos.add(new Producto("Teclado Mecánico", 89.99, "Con switches RGB"));

        // Renderizar productos
        renderizarProductos();

        // Agregar nuevo producto y volver a renderizar
        agregarNuevoProducto();
        System.out.println("\n--- Después de agregar nuevo producto ---");
        renderizarProductos();
    }

    private static void renderizarProductos() {
        for (Producto producto : productos) {
            System.out.println("----------------------------------------");
            System.out.println("Nombre: " + producto.getNombre());
            System.out.printf("Precio: $%.2f%n", producto.getPrecio());
            System.out.println("Descripción: " + producto.getDescripcion());
        }
    }

    private static void agregarNuevoProducto() {
        int numero = productos.size() + 1;
        double precio = Math.round((random.nextDouble() * 100 + 10) * 100.0) / 100.0;
        productos.add(new Producto(
            "Producto " + numero,
            precio,
            "Descripción del producto " + numero
        ));
    }
}
