package api.model;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public class product {

    private int id;
    private String name;
    private String image;
    private String detail;
    private Double latitude;
    private Double longitude;


    public product(int id, String name, String image, String detail, Double latitude, Double longitude) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.detail = detail;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public int getId() {return id;}
    public void setId(int id) {this.id = id;}
    public String getName() {return name;}
    public void setName(String name) {this.name = name;}
    public String getImage() {return image;}
    public void setImage(String image) {this.image = image;}
    public String getDetail() {return detail;}
    public void setDetail(String detail) {this.detail = detail;}
    public Double getLatitude() {return latitude;}
    public void setLatitude(Double latitude) {this.latitude = latitude;}
    public Double getLongitude() {return longitude;}
    public void setLongitude(Double longitude) {this.longitude = longitude;}

}
