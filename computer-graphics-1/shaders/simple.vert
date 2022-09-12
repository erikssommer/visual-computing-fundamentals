#version 430 core

in vec3 position;

void main()
{
    // Mirror/flip the whole scene both horizontally and vertically at the same time (-)
    gl_Position = vec4(-position, 1.0f);
}

