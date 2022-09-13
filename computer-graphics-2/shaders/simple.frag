#version 430 core

out vec4 color;

void main()
{

    // Defining the two colors of the checkerboard
    vec4 red = vec4(1.0f, 0.0f, 0.0f, 1.0f);
    vec4 blue = vec4(0.0f, 0.0f, 1.0f, 1.0f);

    // x and y-coordinate
    int pixel_x = int(floor(gl_FragCoord.xy.x));
    int pixel_y = int(floor(gl_FragCoord.xy.y));

    // Spesifying the shape and what color it contains
    if ((pixel_y % 40 < 20 && pixel_x % 40 >= 20) || 
        (pixel_y % 40 >= 20 && pixel_x % 40 < 20)) {
        color = blue;
    } else {
        color = red;
    }
}

