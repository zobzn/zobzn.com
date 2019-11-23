---
title: Быстрый старт с terraform и hetzner cloud
date: "2019-11-23 10:47:34"
---

1. Устанавливаем terraform.

   ```bash
   # вариант для windows 10 с chocolatey
   choco install -y terraform
   ```

2. Генерируем api токен в hetzner cloud.

   https://console.hetzner.cloud/projects > ... > Access > API TOKENS > GENERATE API TOKEN.

   Копируем сгенерированный api token. Что-то типа такого:  
   `osieghGFOIsefl7983LKjhsekjgseghhseIJHIHiuseghiusy8KJ6khfawf7awfa`

3. Генерируем ssh ключ (если еще нет)

   ```bash
   # генерируем ключи
   ssh-keygen -q -N ""
   # копируем публичный ключ
   xclip -sel clip ~/.ssh/id_rsa.pub
   # ssh-rsa AAAAB3N...w== user@localhost
   ```

   Добавляем его в hetzner cloud.  
   https://console.hetzner.cloud/projects > ... > Access > SSH KEYS > ADD SSH KEY

   Копируем fingerprint, сгенерированный после добавления ssh ключа. Что-то типа такого:  
   `de:c7:80:23:5b:3e:28:52:1a:5d:0f:84:1b:fe:38:ec`

4. Создаем папку для проекта

   ```bash
   mkdir -p ~/example-terraform-hetzner && cd ~/example-terraform-hetzner
   ```

5. Создаем конфигурационный файл для terraform `terraform.tf`

   ```
   # Token variable
   variable "hcloud_token" {}

   # Ssh key fingerprint variable
   variable "hcloud_ssh_key_fingerprint" {}

   # Define Hetzner provider
   provider "hcloud" {
     token = "${var.hcloud_token}"
   }

   # Obtain ssh key data
   data "hcloud_ssh_key" "ssh_key" {
     fingerprint = "${var.hcloud_ssh_key_fingerprint}"
   }

   # Create an Ubuntu 18.04 server
   resource "hcloud_server" "ubuntu18" {
     name        = "ubuntu18"
     image       = "ubuntu-18.04"
     server_type = "cx11"
     ssh_keys    = ["${data.hcloud_ssh_key.ssh_key.id}"]
   }

   # Create Debian 10 server
   resource "hcloud_server" "debian10" {
     name        = "debian10"
     image       = "debian-10"
     server_type = "cx11"
     ssh_keys    = ["${data.hcloud_ssh_key.ssh_key.id}"]
   }

   # Create CentOS 8 server
   resource "hcloud_server" "centos8" {
     name        = "centos8"
     image       = "centos-8"
     server_type = "cx11"
     ssh_keys    = ["${data.hcloud_ssh_key.ssh_key.id}"]
   }

   # Output server IPs
   output "server_ip_ubuntu18" {
     value = "${hcloud_server.ubuntu18.ipv4_address}"
   }

   output "server_ip_debian10" {
     value = "${hcloud_server.debian10.ipv4_address}"
   }

   output "server_ip_centos8" {
     value = "${hcloud_server.centos8.ipv4_address}"
   }
   ```

6. Создаем файл со значениями переменных `terraform.tfvars`

   ```
   # api token из шага 2
   hcloud_token               = "osieghGFOIsefl7983LKjhsekjgseghhseIJHIHiuseghiusy8KJ6khfawf7awfa"
   # ssh key fingerprint из шага 3
   hcloud_ssh_key_fingerprint = "a6:b5:f3:6a:81:31:c9:aa:96:8a:91:92:a3:4c:c1:9b"
   ```

7. Запускаем последовательно

   ```bash
   # инициализация terraform (скачает плагин для hcloud и т.п.)
   terraform init
   # смотрим и проверяем план выполнения
   terraform plan
   # применяем изменения к hcloud
   terraform apply
   ```

8. Потом можно все удалить

   ```bash
   terraform destroy
   ```

Пример готового проекта.  
https://github.com/zobzn/terraform-hetzner-cloud

<!--
На основе https://computingforgeeks.com/deploy-vm-instances-on-hetzner-cloud-with-terraform/
-->
