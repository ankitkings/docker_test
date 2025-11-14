# FROM nginx:alpine

# # remove default nginx html
# RUN rm -rf /usr/share/nginx/html/*

# # copy your html file into nginx folder
# COPY index.html /usr/share/nginx/html/index.html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]


FROM nginx:alpine

# Remove default nginx html folder
RUN rm -rf /usr/share/nginx/html/*

# Copy ALL website files (HTML + assets folder)
COPY . /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
