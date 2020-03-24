<?php

namespace objects;

interface Serializable {

    public function serialize(): array;
    public static function deserialize(array $input): self;

}