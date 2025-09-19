# Armazenamento (Sistema Raspberry)

Comando: df -h

Dia: 09/09/2025
| Filesystem    | Size | Used | Avail| Use% | Mounted on   |
|:--------------|:----:|:----:|:----:|:----:|:-------------|
| Udev          | 1.6G | 0    | 1.6G | 0%   |/dev          |
| Tmpfs         | 380M | 1.5M | 378M | 1%   |/run          |
| /dev/mmcblk0p2| 57G  | 13G  | 42G  | 24%  |/             |
| Tmpfs         | 1.9G | 15M  | 1.9G | 1%   |/dev/shm      |
| Tmpfs         | 5.0M | 16K  | 5.0GB| 1%   |/run/lock     |
| /dev/mmcblk0p1| 510M | 76M  | 435M | 15%  |/boot/firmware|
| Tmpfs         | 380M | 48K  | 380M | 1%   |/run/user/1000|

# Armazenamento (Docker)

Comando: docker system df

Dia: 09/09/2025
| TYPE          | TOTAL    | ACTIVE   | SIZE   | RECLAIMABLE    |
|:--------------|:--------:|:--------:|:------:|:--------------:|
| Images        | 8        | 8        | 3.12GB | 0B (0%)        |
| Containers    | 8        | 8        | 458.6kG| 0B (0%)        |
| Local Volumes | 5        | 4        | 157.5MB| 939.5kB (0%)   |
| Build Cache   | 41       | 0        | 1.402GB| 1.402GB        |